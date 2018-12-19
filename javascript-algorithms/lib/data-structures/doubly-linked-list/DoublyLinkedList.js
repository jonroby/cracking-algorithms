'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DoublyLinkedListNode = require('./DoublyLinkedListNode');

var _DoublyLinkedListNode2 = _interopRequireDefault(_DoublyLinkedListNode);

var _Comparator = require('../../utils/comparator/Comparator');

var _Comparator2 = _interopRequireDefault(_Comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedList = function () {
  /**
   * @param {Function} [comparatorFunction]
   */
  function DoublyLinkedList(comparatorFunction) {
    _classCallCheck(this, DoublyLinkedList);

    /** @var DoublyLinkedListNode */
    this.head = null;

    /** @var DoublyLinkedListNode */
    this.tail = null;

    this.compare = new _Comparator2.default(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */


  _createClass(DoublyLinkedList, [{
    key: 'prepend',
    value: function prepend(value) {
      // Make new node to be a head.
      var newNode = new _DoublyLinkedListNode2.default(value, this.head);

      // If there is head, then it won't be head anymore.
      // Therefore, make its previous reference to be new node (new head).
      // Then mark the new node as head.
      if (this.head) {
        this.head.previous = newNode;
      }
      this.head = newNode;

      // If there is no tail yet let's make new node a tail.
      if (!this.tail) {
        this.tail = newNode;
      }

      return this;
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */

  }, {
    key: 'append',
    value: function append(value) {
      var newNode = new _DoublyLinkedListNode2.default(value);

      // If there is no head yet let's make new node a head.
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;

        return this;
      }

      // Attach new node to the end of linked list.
      this.tail.next = newNode;

      // Attach current tail to the new node's previous reference.
      newNode.previous = this.tail;

      // Set new node to be the tail of linked list.
      this.tail = newNode;

      return this;
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedListNode}
     */

  }, {
    key: 'delete',
    value: function _delete(value) {
      if (!this.head) {
        return null;
      }

      var deletedNode = null;
      var currentNode = this.head;

      while (currentNode) {
        if (this.compare.equal(currentNode.value, value)) {
          deletedNode = currentNode;

          if (deletedNode === this.head) {
            // If HEAD is going to be deleted...

            // Set head to second node, which will become new head.
            this.head = deletedNode.next;

            // Set new head's previous to null.
            if (this.head) {
              this.head.previous = null;
            }

            // If all the nodes in list has same value that is passed as argument
            // then all nodes will get deleted, therefore tail needs to be updated.
            if (deletedNode === this.tail) {
              this.tail = null;
            }
          } else if (deletedNode === this.tail) {
            // If TAIL is going to be deleted...

            // Set tail to second last node, which will become new tail.
            this.tail = deletedNode.previous;
            this.tail.next = null;
          } else {
            // If MIDDLE node is going to be deleted...
            var previousNode = deletedNode.previous;
            var nextNode = deletedNode.next;

            previousNode.next = nextNode;
            nextNode.previous = previousNode;
          }
        }

        currentNode = currentNode.next;
      }

      return deletedNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     */

  }, {
    key: 'find',
    value: function find(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === undefined ? undefined : _ref$value,
          _ref$callback = _ref.callback,
          callback = _ref$callback === undefined ? undefined : _ref$callback;

      if (!this.head) {
        return null;
      }

      var currentNode = this.head;

      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.value)) {
          return currentNode;
        }

        // If value is specified then try to compare by value..
        if (value !== undefined && this.compare.equal(currentNode.value, value)) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }

    /**
     * @return {DoublyLinkedListNode}
     */

  }, {
    key: 'deleteTail',
    value: function deleteTail() {
      if (!this.tail) {
        // No tail to delete.
        return null;
      }

      if (this.head === this.tail) {
        // There is only one node in linked list.
        var _deletedTail = this.tail;
        this.head = null;
        this.tail = null;

        return _deletedTail;
      }

      // If there are many nodes in linked list...
      var deletedTail = this.tail;

      this.tail = this.tail.previous;
      this.tail.next = null;

      return deletedTail;
    }

    /**
     * @return {DoublyLinkedListNode}
     */

  }, {
    key: 'deleteHead',
    value: function deleteHead() {
      if (!this.head) {
        return null;
      }

      var deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
        this.head.previous = null;
      } else {
        this.head = null;
        this.tail = null;
      }

      return deletedHead;
    }

    /**
     * @return {DoublyLinkedListNode[]}
     */

  }, {
    key: 'toArray',
    value: function toArray() {
      var nodes = [];

      var currentNode = this.head;
      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    }

    /**
     * @param {*[]} values - Array of values that need to be converted to linked list.
     * @return {DoublyLinkedList}
     */

  }, {
    key: 'fromArray',
    value: function fromArray(values) {
      var _this = this;

      values.forEach(function (value) {
        return _this.append(value);
      });

      return this;
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString(callback) {
      return this.toArray().map(function (node) {
        return node.toString(callback);
      }).toString();
    }

    /**
     * Reverse a linked list.
     * @returns {DoublyLinkedList}
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      var currNode = this.head;
      var prevNode = null;
      var nextNode = null;

      while (currNode) {
        // Store next node.
        nextNode = currNode.next;
        prevNode = currNode.previous;

        // Change next node of the current node so it would link to previous node.
        currNode.next = prevNode;
        currNode.previous = nextNode;

        // Move prevNode and currNode nodes one step forward.
        prevNode = currNode;
        currNode = nextNode;
      }

      // Reset head and tail.
      this.tail = this.head;
      this.head = prevNode;

      return this;
    }
  }]);

  return DoublyLinkedList;
}();

exports.default = DoublyLinkedList;