const LinkedList = require("./linked-list");

// 2-4 You have two numbers represented by a linked list, where each node
// contains a single digit. The digits are store in reverse order, such
// that the 1's digit is at the head of the list. Write a function that
// adds the two numbers and returns the sum as a linked list.

// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above
// problem.

// T: O()
// S: O()

function sumLists(l1, l2) {
  let n1 = l1._head;
  let n2 = l2._head;
  let sum = new LinkedList();
  let carry = 0;
  while (n1 !== null && n2 !== null) {
    let s = n1._val + n2._val;
    let digit = carry + s;
    digit = digit % 10;
    sum.appendToTail(digit);

    carry = Math.floor(s / 10);

    n1 = n1._next;
    n2 = n2._next;
  }

  // The loops below can be refactored

  while (n1 !== null) {
    let s = n1._val;
    let digit = carry + s;
    carry = Math.floor(digit / 10);
    digit = digit % 10;
    sum.appendToTail(digit);

    n1 = n1._next;
  }

  while (n2 !== null) {
    let s = n2._val;
    let digit = carry + s;
    carry = Math.floor(digit / 10);
    digit = digit % 10;
    sum.appendToTail(digit);

    n2 = n2._next;
  }

  if (carry !== 0) {
    sum.appendToTail(carry);
  }

  return sum;
}

module.exports = sumLists;
