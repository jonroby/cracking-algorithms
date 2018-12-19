"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = depthFirstSearch;
/**
 * @typedef {Object} Callbacks
 *
 * @property {function(vertices: Object): boolean} [allowTraversal] -
 *  Determines whether DFS should traverse from the vertex to its neighbor
 *  (along the edge). By default prohibits visiting the same vertex again.
 *
 * @property {function(vertices: Object)} [enterVertex] - Called when DFS enters the vertex.
 *
 * @property {function(vertices: Object)} [leaveVertex] - Called when DFS leaves the vertex.
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
 * @param {GraphVertex} currentVertex
 * @param {GraphVertex} previousVertex
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(graph, currentVertex, previousVertex, callbacks) {
  callbacks.enterVertex({ currentVertex: currentVertex, previousVertex: previousVertex });

  graph.getNeighbors(currentVertex).forEach(function (nextVertex) {
    if (callbacks.allowTraversal({ previousVertex: previousVertex, currentVertex: currentVertex, nextVertex: nextVertex })) {
      depthFirstSearchRecursive(graph, nextVertex, currentVertex, callbacks);
    }
  });

  callbacks.leaveVertex({ currentVertex: currentVertex, previousVertex: previousVertex });
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [callbacks]
 */
function depthFirstSearch(graph, startVertex, callbacks) {
  var previousVertex = null;
  depthFirstSearchRecursive(graph, startVertex, previousVertex, initCallbacks(callbacks));
}