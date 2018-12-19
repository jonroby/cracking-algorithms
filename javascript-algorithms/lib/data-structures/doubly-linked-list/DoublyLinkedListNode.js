"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedListNode = function () {
  function DoublyLinkedListNode(value) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var previous = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, DoublyLinkedListNode);

    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  _createClass(DoublyLinkedListNode, [{
    key: "toString",
    value: function toString(callback) {
      return callback ? callback(this.value) : "" + this.value;
    }
  }]);

  return DoublyLinkedListNode;
}();

exports.default = DoublyLinkedListNode;