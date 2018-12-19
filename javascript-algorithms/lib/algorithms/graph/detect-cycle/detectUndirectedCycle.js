'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectUndirectedCycle;

var _depthFirstSearch = require('../depth-first-search/depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect cycle in undirected graph using Depth First Search.
 *
 * @param {Graph} graph
 */
function detectUndirectedCycle(graph) {
  var cycle = null;

  // List of vertices that we have visited.
  var visitedVertices = {};

  // List of parents vertices for every visited vertex.
  var parents = {};

  // Callbacks for DFS traversing.
  var callbacks = {
    allowTraversal: function allowTraversal(_ref) {
      var currentVertex = _ref.currentVertex,
          nextVertex = _ref.nextVertex;

      // Don't allow further traversal in case if cycle has been detected.
      if (cycle) {
        return false;
      }

      // Don't allow traversal from child back to its parent.
      var currentVertexParent = parents[currentVertex.getKey()];
      var currentVertexParentKey = currentVertexParent ? currentVertexParent.getKey() : null;

      return currentVertexParentKey !== nextVertex.getKey();
    },
    enterVertex: function enterVertex(_ref2) {
      var currentVertex = _ref2.currentVertex,
          previousVertex = _ref2.previousVertex;

      if (visitedVertices[currentVertex.getKey()]) {
        // Compile cycle path based on parents of previous vertices.
        cycle = {};

        var currentCycleVertex = currentVertex;
        var previousCycleVertex = previousVertex;

        while (previousCycleVertex.getKey() !== currentVertex.getKey()) {
          cycle[currentCycleVertex.getKey()] = previousCycleVertex;
          currentCycleVertex = previousCycleVertex;
          previousCycleVertex = parents[previousCycleVertex.getKey()];
        }

        cycle[currentCycleVertex.getKey()] = previousCycleVertex;
      } else {
        // Add next vertex to visited set.
        visitedVertices[currentVertex.getKey()] = currentVertex;
        parents[currentVertex.getKey()] = previousVertex;
      }
    }
  };

  // Start DFS traversing.
  var startVertex = graph.getAllVertices()[0];
  (0, _depthFirstSearch2.default)(graph, startVertex, callbacks);

  return cycle;
}