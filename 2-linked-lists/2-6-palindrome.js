const LinkedList = require("./linked-list");

// 2-6 Implement a function to check if a linked list is a palindrome.

// There are several ways, I tried to think of a way that would be most
// challenging as it is the worst case.

// T: O(n)
// S: O(1)

function palindrome(lst) {
  function reverse(node) {
    if (node === null) {
      return lst._head;
    } else {
      let reversed = reverse(node._next);
      if (reversed === false) {
        return false;
      } else if (reversed._val !== node._val) {
        return false;
      } else {
        return reversed._next;
      }
    }
  }
  let n = lst._head;
  return reverse(n) === false ? false : true;
}

module.exports = palindrome;
