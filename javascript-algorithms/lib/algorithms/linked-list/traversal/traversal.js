"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traversal;
/**
 * Traversal callback function.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
function traversal(linkedList, callback) {
  var currentNode = linkedList.head;

  while (currentNode) {
    callback(currentNode.value);
    currentNode = currentNode.next;
  }
}