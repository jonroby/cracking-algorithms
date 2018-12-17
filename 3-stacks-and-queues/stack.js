const LinkedList = require("../2-linked-lists/linked-list");

class Stack {
  constructor() {
    // TODO: More time implement a reversed linked list.
    this._storage = new LinkedList();
    this._count = 0;
  }

  push(v) {
    this._storage.appendToTail(v);
    this._count = this._storage._length;
  }

  pop() {
    let node = this._storage.getNode(this._storage._length - 1);
    this._storage.deleteAtIdx(this._storage._length - 1);
    this._count = this._storage._length;
    return node._val;
  }

  peek() {
    if (this._count === 0) return null;
    return this._storage.getNode(this._count - 1)._val;
  }

  isEmpty() {
    return this._count === 0;
  }

  getCount() {
    return this._count;
  }
}

module.exports = Stack;
