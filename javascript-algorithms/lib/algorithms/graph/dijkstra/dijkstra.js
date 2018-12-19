'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dijkstra;

var _PriorityQueue = require('../../../data-structures/priority-queue/PriorityQueue');

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 */
function dijkstra(graph, startVertex) {
  var distances = {};
  var visitedVertices = {};
  var previousVertices = {};
  var queue = new _PriorityQueue2.default();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  graph.getAllVertices().forEach(function (vertex) {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
  });
  distances[startVertex.getKey()] = 0;

  // Init vertices queue.
  queue.add(startVertex, distances[startVertex.getKey()]);

  var _loop = function _loop() {
    var currentVertex = queue.poll();

    graph.getNeighbors(currentVertex).forEach(function (neighbor) {
      // Don't visit already visited vertices.
      if (!visitedVertices[neighbor.getKey()]) {
        // Update distances to every neighbor from current vertex.
        var edge = graph.findEdge(currentVertex, neighbor);

        var existingDistanceToNeighbor = distances[neighbor.getKey()];
        var distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edge.weight;

        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances[neighbor.getKey()] = distanceToNeighborFromCurrent;

          // Change priority.
          if (queue.hasValue(neighbor)) {
            queue.changePriority(neighbor, distances[neighbor.getKey()]);
          }

          // Remember previous vertex.
          previousVertices[neighbor.getKey()] = currentVertex;
        }

        // Add neighbor to the queue for further visiting.
        if (!queue.hasValue(neighbor)) {
          queue.add(neighbor, distances[neighbor.getKey()]);
        }
      }
    });

    // Add current vertex to visited ones.
    visitedVertices[currentVertex.getKey()] = currentVertex;
  };

  while (!queue.isEmpty()) {
    _loop();
  }

  return {
    distances: distances,
    previousVertices: previousVertices
  };
}