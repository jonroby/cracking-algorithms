const LinkedList = require("./linked-list");

// 2-2 Implement an algorithm to find the kth to last element of a singly
// linked list.

// T: O(n)
// S: O(1)
function returnKthToLast1(lst, k) {
  let n = lst._head;
  let prev = null;
  let count = lst._length - 1 - k;
  while (count > 0) {
    count -= 1;
    n = n._next;
  }
  return n;
}

// T: O(n)
// S: O(n)
// Without using length
function returnKthToLast2(lst, k) {
  let ret;
  let traverse = node => {
    if (node._next !== null) {
      traverse(node._next);
      k -= 1;
      if (k === 0) {
        ret = node;
      }
    }
  };

  traverse(lst._head);
  return ret;
}

function returnKthToLast3(lst, k) {
  let traverse = (node, k) => {
    if (node._next === null) {
      return k - 1;
    } else {
      let res = traverse(node._next, k);
      if (typeof res === "number") {
        if (res === 0) {
          return node;
        } else {
          return res - 1;
        }
      } else {
        return res;
      }
    }
  };

  return traverse(lst._head, k);
}

module.exports = { returnKthToLast1, returnKthToLast2, returnKthToLast3 };
