const LinkedList = require("./linked-list");

// 2-3 Implement an algorithm to delete a node in the middle (i.e. any node but
// the first and last node, not necessarily the exact middle) of a singly linked
// list, given only access to that node.

// EXAMPLE
// a -> b -> c -> d -> e -> f
// a -> b -> d -> e -> -> f

// T: O(1)
// S: O(1)
function deleteMiddleNode(n) {
  if (n === null || n._next === null) return false;

  n._val = n._next._val;
  n._next = n._next._next;
}

function getNode(lst, idx) {
  let n = lst._head;
  let count = 0;
  while (n._next !== null && count < idx) {
    n = n._next;
    count += 1;
  }
  return n;
}

module.exports = deleteMiddleNode;
