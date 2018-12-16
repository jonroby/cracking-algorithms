const Stack = require("./stack");

// 3-2 Imagine a literal stack of plates. If the stack gets too high, it might
// topple. Therefore , in real life, we would likely start a new stack when the
// previous stack exceeds some threshold. Implement a data structure SetOfStacks
// that mimics this. SetOfStacks should be composed of several stacks and should
// create a new stack once the previous one exceeds capacity.  SetOfStacks.push()
// and SetofStacks.pop() should behave identically to a single stack.

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a
// specific sub-stack.

// T: O(n)
// S: O(1)
class SetOfStacks {
  constructor(max) {
    this._max = max;
    this._stack = new Stack();
    this._stack.push(new Stack());
  }

  push(v) {
    console.log("this.max ", this._max);
    console.log("this._stack.peek() ", this._stack.peek());
    if (this._stack.peek()._count >= this._max) {
      this._stack.push(new Stack());
      this._stack.peek().push(v);
    } else {
      this._stack.peek().push(v);
    }
  }

  pop() {
    this._stack.peek().pop();

    if (this._stack.peek()._count === 0 && this._stack._count !== 1) {
      this._stack.pop();
    }
  }

  getCount() {
    return this._stack._count;
  }
}

module.exports = SetOfStacks;
