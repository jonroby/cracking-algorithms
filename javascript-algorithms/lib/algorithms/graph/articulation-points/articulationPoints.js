'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = articulationPoints;

var _depthFirstSearch = require('../depth-first-search/depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Helper class for visited vertex metadata.
 */
var VisitMetadata = function VisitMetadata(_ref) {
  var discoveryTime = _ref.discoveryTime,
      lowDiscoveryTime = _ref.lowDiscoveryTime;

  _classCallCheck(this, VisitMetadata);

  this.discoveryTime = discoveryTime;
  this.lowDiscoveryTime = lowDiscoveryTime;
  // We need this in order to check graph root node, whether it has two
  // disconnected children or not.
  this.independentChildrenCount = 0;
};

/**
 * Tarjan's algorithm for finding articulation points in graph.
 *
 * @param {Graph} graph
 * @return {Object}
 */


function articulationPoints(graph) {
  // Set of vertices we've already visited during DFS.
  var visitedSet = {};

  // Set of articulation points.
  var articulationPointsSet = {};

  // Time needed to discover to the current vertex.
  var discoveryTime = 0;

  // Peek the start vertex for DFS traversal.
  var startVertex = graph.getAllVertices()[0];

  var dfsCallbacks = {
    /**
     * @param {GraphVertex} currentVertex
     * @param {GraphVertex} previousVertex
     */
    enterVertex: function enterVertex(_ref2) {
      var currentVertex = _ref2.currentVertex,
          previousVertex = _ref2.previousVertex;

      // Tick discovery time.
      discoveryTime += 1;

      // Put current vertex to visited set.
      visitedSet[currentVertex.getKey()] = new VisitMetadata({
        discoveryTime: discoveryTime,
        lowDiscoveryTime: discoveryTime
      });

      if (previousVertex) {
        // Update children counter for previous vertex.
        visitedSet[previousVertex.getKey()].independentChildrenCount += 1;
      }
    },
    /**
     * @param {GraphVertex} currentVertex
     * @param {GraphVertex} previousVertex
     */
    leaveVertex: function leaveVertex(_ref3) {
      var currentVertex = _ref3.currentVertex,
          previousVertex = _ref3.previousVertex;

      if (previousVertex === null) {
        // Don't do anything for the root vertex if it is already current (not previous one)
        return;
      }

      // Update the low time with the smallest time of adjacent vertices.
      // Get minimum low discovery time from all neighbors.
      /** @param {GraphVertex} neighbor */
      visitedSet[currentVertex.getKey()].lowDiscoveryTime = currentVertex.getNeighbors().filter(function (earlyNeighbor) {
        return earlyNeighbor.getKey() !== previousVertex.getKey();
      })
      /**
       * @param {number} lowestDiscoveryTime
       * @param {GraphVertex} neighbor
       */
      .reduce(function (lowestDiscoveryTime, neighbor) {
        var neighborLowTime = visitedSet[neighbor.getKey()].lowDiscoveryTime;
        return neighborLowTime < lowestDiscoveryTime ? neighborLowTime : lowestDiscoveryTime;
      }, visitedSet[currentVertex.getKey()].lowDiscoveryTime);

      // Detect whether previous vertex is articulation point or not.
      // To do so we need to check two [OR] conditions:
      // 1. Is it a root vertex with at least two independent children.
      // 2. If its visited time is <= low time of adjacent vertex.
      if (previousVertex === startVertex) {
        // Check that root vertex has at least two independent children.
        if (visitedSet[previousVertex.getKey()].independentChildrenCount >= 2) {
          articulationPointsSet[previousVertex.getKey()] = previousVertex;
        }
      } else {
        // Get current vertex low discovery time.
        var currentLowDiscoveryTime = visitedSet[currentVertex.getKey()].lowDiscoveryTime;

        // Compare current vertex low discovery time with parent discovery time. Check if there
        // are any short path (back edge) exists. If we can't get to current vertex other then
        // via parent then the parent vertex is articulation point for current one.
        var parentDiscoveryTime = visitedSet[previousVertex.getKey()].discoveryTime;
        if (parentDiscoveryTime <= currentLowDiscoveryTime) {
          articulationPointsSet[previousVertex.getKey()] = previousVertex;
        }
      }
    },
    allowTraversal: function allowTraversal(_ref4) {
      var nextVertex = _ref4.nextVertex;

      return !visitedSet[nextVertex.getKey()];
    }
  };

  // Do Depth First Search traversal over submitted graph.
  (0, _depthFirstSearch2.default)(graph, startVertex, dfsCallbacks);

  return articulationPointsSet;
}