const LinkedList = require("./linked-list");

// 2-4 Write code to partition a linked list around a value x, such that all
// nodes less than x come before all nodes greater than or equal to x. If x
// is contained within the list, the values of x only need to be after the
// elements less than x. The partition element x can appear anywhere in the
// "right" partition; it does not need to appear between the left and right
// partitions.

// EXAMPLE
// Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// T: O(n)
// S: O(n)

function partition(lst, p) {
  let rightOfPartition = new LinkedList();
  let n = lst._head;
  let prev = null;
  let headIsHandled = false;

  while (n !== null) {
    if (n._val >= p) {
      rightOfPartition.appendToTail(n._val);
      if (headIsHandled) {
        prev._next = n._next;
      } else {
        lst._head = n._next;
      }
    } else {
      headIsHandled = true;
      prev = n;
    }

    n = n._next;
  }

  // Special case for tail?

  let rp = rightOfPartition._head;
  while (rp !== null) {
    lst.appendToTail(rp._val);
    rp = rp._next;
  }

  return lst;
}

module.exports = partition;
