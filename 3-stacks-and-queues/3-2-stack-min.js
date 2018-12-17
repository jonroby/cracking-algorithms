const Stack = require("./stack");

// 3-2 How would you design a stack which, in addition to push and pop, has a
// a function min which returns the minimum element?

// T: O(n)
// S: O(1)
class StackMin extends Stack {
  constructor(props) {
    super(props);

    this._min = null;
  }

  push(v) {
    if (this._min === null || this._min > v) {
      this._min = v;
    }

    super.push(v);
  }

  pop() {
    super.pop();

    this.scanForMin();
  }

  scanForMin() {
    let n = this._storage._head;
    if (n === null) {
      this._min = null;
      return;
    }

    let min = n._val;
    while (n._next !== null) {
      if (min > n._val) {
        min = n._val;
      }
      n = n._next;
    }
  }

  getMin() {
    return this._min;
  }
}

module.exports = StackMin;
