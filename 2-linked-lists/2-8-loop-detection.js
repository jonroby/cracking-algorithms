const LinkedList = require("./linked-list");

// 2-8 Given a circular linked list, implement an algorithm that returns the
// node at the beginning of a loop.

// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next
// pointer points to an earlier node, so as to make a loop in the linked list.

// EXAMPLE
// Input: A -> B -> C -> D -> E -> C (the same C as earlier)
// Output: C

// I'm only returning true and node at the beginning of the loop. I can't think
// of how to do that without using space.

// T: O(n)
// S: O(1)
function loopDetection(l) {
  if (l._head === null) return false;
  
  let tortoise = l._head;
  let hare = l._head._next;

  while (hare !== null && hare._next !== null && tortoise !== null) {
    if (tortoise === hare) {
      return true;
    }

    tortoise = tortoise._next;
    hare = hare._next._next;
  }

  return false;
}

module.exports = loopDetection;
