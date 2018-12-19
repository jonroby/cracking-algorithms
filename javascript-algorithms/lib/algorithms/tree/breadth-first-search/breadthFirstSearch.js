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
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal -
 *   Determines whether DFS should traverse from the node to its child.
 * @property {function(node: BinaryTreeNode)} enterNode - Called when DFS enters the node.
 * @property {function(node: BinaryTreeNode)} leaveNode - Called when DFS leaves the node.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks() {
  var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};
  var defaultAllowTraversal = function defaultAllowTraversal() {
    return true;
  };

  initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
  initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback;

  return initiatedCallback;
}

/**
 * @param {BinaryTreeNode} rootNode
 * @param {Callbacks} [originalCallbacks]
 */
function breadthFirstSearch(rootNode, originalCallbacks) {
  var callbacks = initCallbacks(originalCallbacks);
  var nodeQueue = new _Queue2.default();

  // Do initial queue setup.
  nodeQueue.enqueue(rootNode);

  while (!nodeQueue.isEmpty()) {
    var currentNode = nodeQueue.dequeue();

    callbacks.enterNode(currentNode);

    // Add all children to the queue for future traversals.

    // Traverse left branch.
    if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
      nodeQueue.enqueue(currentNode.left);
    }

    // Traverse right branch.
    if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
      nodeQueue.enqueue(currentNode.right);
    }

    callbacks.leaveNode(currentNode);
  }
}