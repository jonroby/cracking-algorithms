'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectDirectedCycle;

var _depthFirstSearch = require('../depth-first-search/depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect cycle in directed graph using Depth First Search.
 *
 * @param {Graph} graph
 */
function detectDirectedCycle(graph) {
  var cycle = null;

  // Will store parents (previous vertices) for all visited nodes.
  // This will be needed in order to specify what path exactly is a cycle.
  var dfsParentMap = {};

  // White set (UNVISITED) contains all the vertices that haven't been visited at all.
  var whiteSet = {};

  // Gray set (VISITING) contains all the vertices that are being visited right now
  // (in current path).
  var graySet = {};

  // Black set (VISITED) contains all the vertices that has been fully visited.
  // Meaning that all children of the vertex has been visited.
  var blackSet = {};

  // If we encounter vertex in gray set it means that we've found a cycle.
  // Because when vertex in gray set it means that its neighbors or its neighbors
  // neighbors are still being explored.

  // Init white set and add all vertices to it.
  /** @param {GraphVertex} vertex */
  graph.getAllVertices().forEach(function (vertex) {
    whiteSet[vertex.getKey()] = vertex;
  });

  // Describe BFS callbacks.
  var callbacks = {
    enterVertex: function enterVertex(_ref) {
      var currentVertex = _ref.currentVertex,
          previousVertex = _ref.previousVertex;

      if (graySet[currentVertex.getKey()]) {
        // If current vertex already in grey set it means that cycle is detected.
        // Let's detect cycle path.
        cycle = {};

        var currentCycleVertex = currentVertex;
        var previousCycleVertex = previousVertex;

        while (previousCycleVertex.getKey() !== currentVertex.getKey()) {
          cycle[currentCycleVertex.getKey()] = previousCycleVertex;
          currentCycleVertex = previousCycleVertex;
          previousCycleVertex = dfsParentMap[previousCycleVertex.getKey()];
        }

        cycle[currentCycleVertex.getKey()] = previousCycleVertex;
      } else {
        // Otherwise let's add current vertex to gray set and remove it from white set.
        graySet[currentVertex.getKey()] = currentVertex;
        delete whiteSet[currentVertex.getKey()];

        // Update DFS parents list.
        dfsParentMap[currentVertex.getKey()] = previousVertex;
      }
    },
    leaveVertex: function leaveVertex(_ref2) {
      var currentVertex = _ref2.currentVertex;

      // If all node's children has been visited let's remove it from gray set
      // and move it to the black set meaning that all its neighbors are visited.
      blackSet[currentVertex.getKey()] = currentVertex;
      delete graySet[currentVertex.getKey()];
    },
    allowTraversal: function allowTraversal(_ref3) {
      var nextVertex = _ref3.nextVertex;

      // If cycle was detected we must forbid all further traversing since it will
      // cause infinite traversal loop.
      if (cycle) {
        return false;
      }

      // Allow traversal only for the vertices that are not in black set
      // since all black set vertices have been already visited.
      return !blackSet[nextVertex.getKey()];
    }
  };

  // Start exploring vertices.
  while (Object.keys(whiteSet).length) {
    // Pick fist vertex to start BFS from.
    var firstWhiteKey = Object.keys(whiteSet)[0];
    var startVertex = whiteSet[firstWhiteKey];

    // Do Depth First Search.
    (0, _depthFirstSearch2.default)(graph, startVertex, callbacks);
  }

  return cycle;
}