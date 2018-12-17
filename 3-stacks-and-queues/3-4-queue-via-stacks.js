const Stack = require("./stack");

// 3-4 Implement a MyQueue class which implements a queue using two stacks.

class QueueViaStacks {
  constructor(max) {
    this._max = max;
    this._stack1 = new Stack();
    this._stack2 = new Stack();
  }

  enqueue(v) {
    this._stack1.push(v);
  }

  dequeue() {
    if (this._stack2._count > 0) {
      return this._stack2.pop();
    } else {
      while (this._stack1._count > 0) {
        this._stack2.push(this._stack1.pop());
      }
      return this._stack2.pop();
    }
  }

  isEmpty() {
    return this._stack1._count === 0 && this._stack2._count === 0;
  }
}

module.exports = QueueViaStacks;
