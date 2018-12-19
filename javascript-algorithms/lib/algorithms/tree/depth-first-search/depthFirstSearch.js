"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depthFirstSearchRecursive = depthFirstSearchRecursive;
exports.default = depthFirstSearch;
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
 * @param {BinaryTreeNode} node
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(node, callbacks) {
  callbacks.enterNode(node);

  // Traverse left branch.
  if (node.left && callbacks.allowTraversal(node, node.left)) {
    depthFirstSearchRecursive(node.left, callbacks);
  }

  // Traverse right branch.
  if (node.right && callbacks.allowTraversal(node, node.right)) {
    depthFirstSearchRecursive(node.right, callbacks);
  }

  callbacks.leaveNode(node);
}

/**
 * @param {BinaryTreeNode} rootNode
 * @param {Callbacks} [callbacks]
 */
function depthFirstSearch(rootNode, callbacks) {
  depthFirstSearchRecursive(rootNode, initCallbacks(callbacks));
}