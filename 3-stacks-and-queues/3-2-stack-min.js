const Stack = require("./stack");

// 3-2 How would you design a stack which, in addition to push and pop, has a
// a function min which returns the minimum element? Push, pop, and min should
// all operate in O(1).

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
// class StackMin {
//   constructor() {
//     // TODO: More time implement a reversed linked list.
//     this._storage = new LinkedList();
//     this._count = 0;
//     this._min = 0;
//   }

//   push(v) {
//     this._storage.appendToTail(v);
//     this._count = this._storage._length;

//     if (this._min > v) {
//       this.min_ = v;
//     }
//   }

//   pop() {
//     let node = this._storage.getNode(this._storage._length - 1);
//     this._storage.deleteAtIdx(this._length - 1);
//     this._count = this._storage._length;

//     if (node._val)
//     return node;
//   }

//   scanForMin() {
//     let n = this._storage._head;
//     let min = n._val;
//     while (n !== null) {
//       if (min > n._val) {
// 	min = n._val;
//       }
//     }
//   }

//   peek() {
//     return this._storage.getNode(this._count - 1)._val;
//   }

//   isEmpty() {
//     return this._count === 0;
//   }

//   getCount() {
//     return this._count;
//   }

//   getMin() {
//     return this._min;
//   }
// }

module.exports = StackMin;
