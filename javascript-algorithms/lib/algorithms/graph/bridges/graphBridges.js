'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = graphBridges;

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
};

/**
 * @param {Graph} graph
 * @return {Object}
 */


function graphBridges(graph) {
  // Set of vertices we've already visited during DFS.
  var visitedSet = {};

  // Set of bridges.
  var bridges = {};

  // Time needed to discover to the current vertex.
  var discoveryTime = 0;

  // Peek the start vertex for DFS traversal.
  var startVertex = graph.getAllVertices()[0];

  var dfsCallbacks = {
    /**
     * @param {GraphVertex} currentVertex
     */
    enterVertex: function enterVertex(_ref2) {
      var currentVertex = _ref2.currentVertex;

      // Tick discovery time.
      discoveryTime += 1;

      // Put current vertex to visited set.
      visitedSet[currentVertex.getKey()] = new VisitMetadata({
        discoveryTime: discoveryTime,
        lowDiscoveryTime: discoveryTime
      });
    },
    /**
     * @param {GraphVertex} currentVertex
     * @param {GraphVertex} previousVertex
     */
    leaveVertex: function leaveVertex(_ref3) {
      var currentVertex = _ref3.currentVertex,
          previousVertex = _ref3.previousVertex;

      if (previousVertex === null) {
        // Don't do anything for the root vertex if it is already current (not previous one).
        return;
      }

      // Check if current node is connected to any early node other then previous one.
      visitedSet[currentVertex.getKey()].lowDiscoveryTime = currentVertex.getNeighbors().filter(function (earlyNeighbor) {
        return earlyNeighbor.getKey() !== previousVertex.getKey();
      }).reduce(
      /**
       * @param {number} lowestDiscoveryTime
       * @param {GraphVertex} neighbor
       */
      function (lowestDiscoveryTime, neighbor) {
        var neighborLowTime = visitedSet[neighbor.getKey()].lowDiscoveryTime;
        return neighborLowTime < lowestDiscoveryTime ? neighborLowTime : lowestDiscoveryTime;
      }, visitedSet[currentVertex.getKey()].lowDiscoveryTime);

      // Compare low discovery times. In case if current low discovery time is less than the one
      // in previous vertex then update previous vertex low time.
      var currentLowDiscoveryTime = visitedSet[currentVertex.getKey()].lowDiscoveryTime;
      var previousLowDiscoveryTime = visitedSet[previousVertex.getKey()].lowDiscoveryTime;
      if (currentLowDiscoveryTime < previousLowDiscoveryTime) {
        visitedSet[previousVertex.getKey()].lowDiscoveryTime = currentLowDiscoveryTime;
      }

      // Compare current vertex low discovery time with parent discovery time. Check if there
      // are any short path (back edge) exists. If we can't get to current vertex other then
      // via parent then the parent vertex is articulation point for current one.
      var parentDiscoveryTime = visitedSet[previousVertex.getKey()].discoveryTime;
      if (parentDiscoveryTime < currentLowDiscoveryTime) {
        var bridge = graph.findEdge(previousVertex, currentVertex);
        bridges[bridge.getKey()] = bridge;
      }
    },
    allowTraversal: function allowTraversal(_ref4) {
      var nextVertex = _ref4.nextVertex;

      return !visitedSet[nextVertex.getKey()];
    }
  };

  // Do Depth First Search traversal over submitted graph.
  (0, _depthFirstSearch2.default)(graph, startVertex, dfsCallbacks);

  return bridges;
}