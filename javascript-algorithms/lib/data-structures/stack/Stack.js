'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = require('../linked-list/LinkedList');

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new _LinkedList2.default();
  }

  /**
   * @return {boolean}
   */


  _createClass(Stack, [{
    key: 'isEmpty',
    value: function isEmpty() {
      // The stack is empty if its linked list doesn't have a head.
      return !this.linkedList.head;
    }

    /**
     * @return {*}
     */

  }, {
    key: 'peek',
    value: function peek() {
      if (this.isEmpty()) {
        // If the linked list is empty then there is nothing to peek from.
        return null;
      }

      // Just read the value from the start of linked list without deleting it.
      return this.linkedList.head.value;
    }

    /**
     * @param {*} value
     */

  }, {
    key: 'push',
    value: function push(value) {
      // Pushing means to lay the value on top of the stack. Therefore let's just add
      // the new value at the start of the linked list.
      this.linkedList.prepend(value);
    }

    /**
     * @return {*}
     */

  }, {
    key: 'pop',
    value: function pop() {
      // Let's try to delete the first node (the head) from the linked list.
      // If there is no head (the linked list is empty) just return null.
      var removedHead = this.linkedList.deleteHead();
      return removedHead ? removedHead.value : null;
    }

    /**
     * @return {*[]}
     */

  }, {
    key: 'toArray',
    value: function toArray() {
      return this.linkedList.toArray().map(function (linkedListNode) {
        return linkedListNode.value;
      });
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString(callback) {
      return this.linkedList.toString(callback);
    }
  }]);

  return Stack;
}();

exports.default = Stack;