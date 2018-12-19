"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverseTraversal;
/**
 * Traversal callback function.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedListNode} node
 * @param {traversalCallback} callback
 */
function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
function reverseTraversal(linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback);
}