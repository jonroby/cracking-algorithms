const LinkedList = require('../2-linked-lists/linked-list');

class Queue {
  constructor() {
    this._count = {};
    this._storage = new LinkedList();
  }

  add(v) {
    this._storage.appendToTail(v)
  }

  remove() {
    let removed = this._storage._head;
    this._storage.deleteAtIdx(0);
    return removed._val;
  }

  peek() {
    return this._storage.getNode(0)._val;
  }

  isEmpty() {
    return this._storage._length === 0;
  }
}

module.exports = Queue;
