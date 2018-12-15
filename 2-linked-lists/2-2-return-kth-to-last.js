const LinkedList = require("./linked-list");

// 2-2 Implement an algorithm to find the kth to last element of a singly
// linked list.

// T: O(n)
// S: O(1)
function removeKthToLast(lst, k) {
  let n = lst._head;
  let prev = null;
  let count = lst._length - 1 - k;  
  while (count > 0) {
    count -= 1;
    n = n._next;
  }
  return n;
}

module.exports = removeKthToLast;
