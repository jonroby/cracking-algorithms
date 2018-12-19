'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = topologicalSort;

var _Stack = require('../../../data-structures/stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var _depthFirstSearch = require('../depth-first-search/depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Graph} graph
 */
function topologicalSort(graph) {
  // Create a set of all vertices we want to visit.
  var unvisitedSet = {};
  graph.getAllVertices().forEach(function (vertex) {
    unvisitedSet[vertex.getKey()] = vertex;
  });

  // Create a set for all vertices that we've already visited.
  var visitedSet = {};

  // Create a stack of already ordered vertices.
  var sortedStack = new _Stack2.default();

  var dfsCallbacks = {
    enterVertex: function enterVertex(_ref) {
      var currentVertex = _ref.currentVertex;

      // Add vertex to visited set in case if all its children has been explored.
      visitedSet[currentVertex.getKey()] = currentVertex;

      // Remove this vertex from unvisited set.
      delete unvisitedSet[currentVertex.getKey()];
    },
    leaveVertex: function leaveVertex(_ref2) {
      var currentVertex = _ref2.currentVertex;

      // If the vertex has been totally explored then we may push it to stack.
      sortedStack.push(currentVertex);
    },
    allowTraversal: function allowTraversal(_ref3) {
      var nextVertex = _ref3.nextVertex;

      return !visitedSet[nextVertex.getKey()];
    }
  };

  // Let's go and do DFS for all unvisited nodes.
  while (Object.keys(unvisitedSet).length) {
    var currentVertexKey = Object.keys(unvisitedSet)[0];
    var currentVertex = unvisitedSet[currentVertexKey];

    // Do DFS for current node.
    (0, _depthFirstSearch2.default)(graph, currentVertex, dfsCallbacks);
  }

  return sortedStack.toArray();
}