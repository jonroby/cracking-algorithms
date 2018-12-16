const LinkedList = require("./linked-list");

// 2-7 Given two singly linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined based on
// reference, not value. That is, if the kth node of the first linked list is
// the exact same node (by reference) as the jth node of the second linked list
// then they are intersecting.

// T: O(n)
// S: O(1)

function intersection(l1, l2) {
  let len1 = l1._length;
  let len2 = l2._length;

  let diff = len1 - len2;
  let n1;
  let n2;

  if (diff < 0) {
    n1 = l1._head;
    n2 = l2.getNode(diff * -1);
  } else if (diff > 0) {
    n1 = l1.getNode(diff);
    n2 = l2._head;
  } else {
    n1 = l1._head;
    n2 = l2._head;
  }

  while (n1 !== n2 || n1._next === null || n2._next === null) {
    n1 = n1._next;
    n2 = n2._next;
  }
  
  if (n1 === null) return null;
  return n1;
}

module.exports = intersection;
