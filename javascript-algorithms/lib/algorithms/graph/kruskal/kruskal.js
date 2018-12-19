'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = kruskal;

var _Graph = require('../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _QuickSort = require('../../sorting/quick-sort/QuickSort');

var _QuickSort2 = _interopRequireDefault(_QuickSort);

var _DisjointSet = require('../../../data-structures/disjoint-set/DisjointSet');

var _DisjointSet2 = _interopRequireDefault(_DisjointSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Graph} graph
 * @return {Graph}
 */
function kruskal(graph) {
  // It should fire error if graph is directed since the algorithm works only
  // for undirected graphs.
  if (graph.isDirected) {
    throw new Error('Kruskal\'s algorithms works only for undirected graphs');
  }

  // Init new graph that will contain minimum spanning tree of original graph.
  var minimumSpanningTree = new _Graph2.default();

  // Sort all graph edges in increasing order.
  var sortingCallbacks = {
    /**
     * @param {GraphEdge} graphEdgeA
     * @param {GraphEdge} graphEdgeB
     */
    compareCallback: function compareCallback(graphEdgeA, graphEdgeB) {
      if (graphEdgeA.weight === graphEdgeB.weight) {
        return 1;
      }

      return graphEdgeA.weight <= graphEdgeB.weight ? -1 : 1;
    }
  };
  var sortedEdges = new _QuickSort2.default(sortingCallbacks).sort(graph.getAllEdges());

  // Create disjoint sets for all graph vertices.
  var keyCallback = function keyCallback(graphVertex) {
    return graphVertex.getKey();
  };
  var disjointSet = new _DisjointSet2.default(keyCallback);

  graph.getAllVertices().forEach(function (graphVertex) {
    disjointSet.makeSet(graphVertex);
  });

  // Go through all edges started from the minimum one and try to add them
  // to minimum spanning tree. The criteria of adding the edge would be whether
  // it is forms the cycle or not (if it connects two vertices from one disjoint
  // set or not).
  for (var edgeIndex = 0; edgeIndex < sortedEdges.length; edgeIndex += 1) {
    /** @var {GraphEdge} currentEdge */
    var currentEdge = sortedEdges[edgeIndex];

    // Check if edge forms the cycle. If it does then skip it.
    if (!disjointSet.inSameSet(currentEdge.startVertex, currentEdge.endVertex)) {
      // Unite two subsets into one.
      disjointSet.union(currentEdge.startVertex, currentEdge.endVertex);

      // Add this edge to spanning tree.
      minimumSpanningTree.addEdge(currentEdge);
    }
  }

  return minimumSpanningTree;
}