const LinkedList = require("../javascript-algorithms/lib/data-structures/linked-list/LinkedList")
  .default;

// 4-3 Given a binary tree, design an algorithm which creates a linked list of
// all the nodes at each depth (e.g. if you have a tree with depth D you'll
// have D linked lists).

function listOfDepths(tree, level, arr) {
  if (arr[level]) {
    arr[level].push(tree.value);
  } else {
    arr.push([tree.value]);
  }

  if (tree.left) {
    listOfDepths(tree.left, level + 1, arr);
  }

  if (tree.right) {
    listOfDepths(tree.right, level + 1, arr);
  }

  return arr;
}

module.exports = listOfDepths;
