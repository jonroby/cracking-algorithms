'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = breadthFirstSearch;

var _Queue = require('../../../data-structures/queue/Queue');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} Callbacks
 *
 * @property {function(vertices: Object): boolean} [allowTraversal] -
 *   Determines whether DFS should traverse from the vertex to its neighbor
 *   (along the edge). By default prohibits visiting the same vertex again.
 *
 * @property {function(vertices: Object)} [enterVertex] - Called when BFS enters the vertex.
 *
 * @property {function(vertices: Object)} [leaveVertex] - Called when BFS leaves the vertex.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks() {
  var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};

  var allowTraversalCallback = function () {
    var seen = {};
    return function (_ref) {
      var nextVertex = _ref.nextVertex;

      if (!seen[nextVertex.getKey()]) {
        seen[nextVertex.getKey()] = true;
        return true;
      }
      return false;
    };
  }();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
  initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;

  return initiatedCallback;
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [originalCallbacks]
 */
function breadthFirstSearch(graph, startVertex, originalCallbacks) {
  var callbacks = initCallbacks(originalCallbacks);
  var vertexQueue = new _Queue2.default();

  // Do initial queue setup.
  vertexQueue.enqueue(startVertex);

  var previousVertex = null;

  // Traverse all vertices from the queue.

  var _loop = function _loop() {
    var currentVertex = vertexQueue.dequeue();
    callbacks.enterVertex({ currentVertex: currentVertex, previousVertex: previousVertex });

    // Add all neighbors to the queue for future traversals.
    graph.getNeighbors(currentVertex).forEach(function (nextVertex) {
      if (callbacks.allowTraversal({ previousVertex: previousVertex, currentVertex: currentVertex, nextVertex: nextVertex })) {
        vertexQueue.enqueue(nextVertex);
      }
    });

    callbacks.leaveVertex({ currentVertex: currentVertex, previousVertex: previousVertex });

    // Memorize current vertex before next loop.
    previousVertex = currentVertex;
  };

  while (!vertexQueue.isEmpty()) {
    _loop();
  }
}