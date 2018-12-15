const LinkedList = require("./linked-list");

// 2-1 Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not
// allowed?

// T: O(n)
// S: O(n)
function removeDups(lst) {
  let s = new Set();
  let n = lst._head;
  let prev = null;
  while (n !== null) {
    if (s.has(n._val)) {
      prev._next = n._next;
    } else {
      s.add(n._val);
      prev = n;
    }

    n = n._next;
  }
  return lst;
}

module.exports = removeDups;
