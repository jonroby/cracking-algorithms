class Stack {
  constructor() {
    this._storage = {};
    this._count = 0;
  }

  pop() {
    const popped = this._storage[this._count];
    delete this._storage[this._count];
    this._count--;
    return popped;
  }

  push(val) {
    this._count++;
    this._storage[this._count] = val;
  }

  peek() {
    return this._storage[this._count];
  }
}

module.exports = Stack;
