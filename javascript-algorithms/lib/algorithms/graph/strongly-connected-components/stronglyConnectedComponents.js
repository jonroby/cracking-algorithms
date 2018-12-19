'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stronglyConnectedComponents;

var _Stack = require('../../../data-structures/stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var _depthFirstSearch = require('../depth-first-search/depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {Graph} graph
 * @return {Stack}
 */
function getVerticesSortedByDfsFinishTime(graph) {
  // Set of all visited vertices during DFS pass.
  var visitedVerticesSet = {};

  // Stack of vertices by finish time.
  // All vertices in this stack are ordered by finished time in decreasing order.
  // Vertex that has been finished first will be at the bottom of the stack and
  // vertex that has been finished last will be at the top of the stack.
  var verticesByDfsFinishTime = new _Stack2.default();

  // Set of all vertices we're going to visit.
  var notVisitedVerticesSet = {};
  graph.getAllVertices().forEach(function (vertex) {
    notVisitedVerticesSet[vertex.getKey()] = vertex;
  });

  // Specify DFS traversal callbacks.
  var dfsCallbacks = {
    enterVertex: function enterVertex(_ref) {
      var currentVertex = _ref.currentVertex;

      // Add current vertex to visited set.
      visitedVerticesSet[currentVertex.getKey()] = currentVertex;

      // Delete current vertex from not visited set.
      delete notVisitedVerticesSet[currentVertex.getKey()];
    },
    leaveVertex: function leaveVertex(_ref2) {
      var currentVertex = _ref2.currentVertex;

      // Push vertex to the stack when leaving it.
      // This will make stack to be ordered by finish time in decreasing order.
      verticesByDfsFinishTime.push(currentVertex);
    },
    allowTraversal: function allowTraversal(_ref3) {
      var nextVertex = _ref3.nextVertex;

      // Don't allow to traverse the nodes that have been already visited.
      return !visitedVerticesSet[nextVertex.getKey()];
    }
  };

  // Do FIRST DFS PASS traversal for all graph vertices to fill the verticesByFinishTime stack.
  while (Object.values(notVisitedVerticesSet).length) {
    // Peek any vertex to start DFS traversal from.
    var startVertexKey = Object.keys(notVisitedVerticesSet)[0];
    var startVertex = notVisitedVerticesSet[startVertexKey];
    delete notVisitedVerticesSet[startVertexKey];

    (0, _depthFirstSearch2.default)(graph, startVertex, dfsCallbacks);
  }

  return verticesByDfsFinishTime;
}

/**
 * @param {Graph} graph
 * @param {Stack} verticesByFinishTime
 * @return {*[]}
 */
function getSCCSets(graph, verticesByFinishTime) {
  // Array of arrays of strongly connected vertices.
  var stronglyConnectedComponentsSets = [];

  // Array that will hold all vertices that are being visited during one DFS run.
  var stronglyConnectedComponentsSet = [];

  // Visited vertices set.
  var visitedVerticesSet = {};

  // Callbacks for DFS traversal.
  var dfsCallbacks = {
    enterVertex: function enterVertex(_ref4) {
      var currentVertex = _ref4.currentVertex;

      // Add current vertex to SCC set of current DFS round.
      stronglyConnectedComponentsSet.push(currentVertex);

      // Add current vertex to visited set.
      visitedVerticesSet[currentVertex.getKey()] = currentVertex;
    },
    leaveVertex: function leaveVertex(_ref5) {
      var previousVertex = _ref5.previousVertex;

      // Once DFS traversal is finished push the set of found strongly connected
      // components during current DFS round to overall strongly connected components set.
      // The sign that traversal is about to be finished is that we came back to start vertex
      // which doesn't have parent.
      if (previousVertex === null) {
        stronglyConnectedComponentsSets.push([].concat(_toConsumableArray(stronglyConnectedComponentsSet)));
      }
    },
    allowTraversal: function allowTraversal(_ref6) {
      var nextVertex = _ref6.nextVertex;

      // Don't allow traversal of already visited vertices.
      return !visitedVerticesSet[nextVertex.getKey()];
    }
  };

  while (!verticesByFinishTime.isEmpty()) {
    /** @var {GraphVertex} startVertex */
    var startVertex = verticesByFinishTime.pop();

    // Reset the set of strongly connected vertices.
    stronglyConnectedComponentsSet = [];

    // Don't do DFS on already visited vertices.
    if (!visitedVerticesSet[startVertex.getKey()]) {
      // Do DFS traversal.
      (0, _depthFirstSearch2.default)(graph, startVertex, dfsCallbacks);
    }
  }

  return stronglyConnectedComponentsSets;
}

/**
 * Kosaraju's algorithm.
 *
 * @param {Graph} graph
 * @return {*[]}
 */
function stronglyConnectedComponents(graph) {
  // In this algorithm we will need to do TWO DFS PASSES overt the graph.

  // Get stack of vertices ordered by DFS finish time.
  // All vertices in this stack are ordered by finished time in decreasing order:
  // Vertex that has been finished first will be at the bottom of the stack and
  // vertex that has been finished last will be at the top of the stack.
  var verticesByFinishTime = getVerticesSortedByDfsFinishTime(graph);

  // Reverse the graph.
  graph.reverse();

  // Do DFS once again on reversed graph.
  return getSCCSets(graph, verticesByFinishTime);
}