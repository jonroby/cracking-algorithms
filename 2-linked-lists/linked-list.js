class Node {
  constructor(val) {
    this._val = val;
    this._next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  appendToTail(v) {
    let end = new Node(v);
    if (this._head !== null) {
      let n = this._head;
      while (n._next !== null) {
        n = n._next;
      }
      n._next = end;
    } else {
      this._head = end;
    }
    this._length += 1;
  }

  deleteNode(v) {
    let n = this._head;
    if (n._val === v) {
      this._head = n._next;
      return this._head;
    }

    while (n._next !== null) {
      if (n._next._val === v) {
        n._next = n._next._next;
        return this._head;
      }
      n = n._next;
    }
    this._length -= 1;
    return this._head;
  }
}

module.exports = LinkedList;
