"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bellmanFord;
/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @return {{distances, previousVertices}}
 */
function bellmanFord(graph, startVertex) {
  var distances = {};
  var previousVertices = {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex.getKey()] = 0;
  graph.getAllVertices().forEach(function (vertex) {
    previousVertices[vertex.getKey()] = null;
    if (vertex.getKey() !== startVertex.getKey()) {
      distances[vertex.getKey()] = Infinity;
    }
  });

  // We need (|V| - 1) iterations.
  for (var iteration = 0; iteration < graph.getAllVertices().length - 1; iteration += 1) {
    // During each iteration go through all vertices.
    Object.keys(distances).forEach(function (vertexKey) {
      var vertex = graph.getVertexByKey(vertexKey);

      // Go through all vertex edges.
      graph.getNeighbors(vertex).forEach(function (neighbor) {
        var edge = graph.findEdge(vertex, neighbor);
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        var distanceToVertex = distances[vertex.getKey()];
        var distanceToNeighbor = distanceToVertex + edge.weight;
        if (distanceToNeighbor < distances[neighbor.getKey()]) {
          distances[neighbor.getKey()] = distanceToNeighbor;
          previousVertices[neighbor.getKey()] = vertex;
        }
      });
    });
  }

  return {
    distances: distances,
    previousVertices: previousVertices
  };
}