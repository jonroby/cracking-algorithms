'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectUndirectedCycleUsingDisjointSet;

var _DisjointSet = require('../../../data-structures/disjoint-set/DisjointSet');

var _DisjointSet2 = _interopRequireDefault(_DisjointSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect cycle in undirected graph using disjoint sets.
 *
 * @param {Graph} graph
 */
function detectUndirectedCycleUsingDisjointSet(graph) {
  // Create initial singleton disjoint sets for each graph vertex.
  /** @param {GraphVertex} graphVertex */
  var keyExtractor = function keyExtractor(graphVertex) {
    return graphVertex.getKey();
  };
  var disjointSet = new _DisjointSet2.default(keyExtractor);
  graph.getAllVertices().forEach(function (graphVertex) {
    return disjointSet.makeSet(graphVertex);
  });

  // Go trough all graph edges one by one and check if edge vertices are from the
  // different sets. In this case joint those sets together. Do this until you find
  // an edge where to edge vertices are already in one set. This means that current
  // edge will create a cycle.
  var cycleFound = false;
  /** @param {GraphEdge} graphEdge */
  graph.getAllEdges().forEach(function (graphEdge) {
    if (disjointSet.inSameSet(graphEdge.startVertex, graphEdge.endVertex)) {
      // Cycle found.
      cycleFound = true;
    } else {
      disjointSet.union(graphEdge.startVertex, graphEdge.endVertex);
    }
  });

  return cycleFound;
}