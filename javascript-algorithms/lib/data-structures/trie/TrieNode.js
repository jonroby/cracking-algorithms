'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashTable = require('../hash-table/HashTable');

var _HashTable2 = _interopRequireDefault(_HashTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrieNode = function () {
  /**
   * @param {string} character
   * @param {boolean} isCompleteWord
   */
  function TrieNode(character) {
    var isCompleteWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, TrieNode);

    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new _HashTable2.default();
  }

  /**
   * @param {string} character
   * @return {TrieNode}
   */


  _createClass(TrieNode, [{
    key: 'getChild',
    value: function getChild(character) {
      return this.children.get(character);
    }

    /**
     * @param {string} character
     * @param {boolean} isCompleteWord
     * @return {TrieNode}
     */

  }, {
    key: 'addChild',
    value: function addChild(character) {
      var isCompleteWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.children.has(character)) {
        this.children.set(character, new TrieNode(character, isCompleteWord));
      }

      var childNode = this.children.get(character);

      // In cases similar to adding "car" after "carpet" we need to mark "r" character as complete.
      childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

      return childNode;
    }

    /**
     * @param {string} character
     * @return {TrieNode}
     */

  }, {
    key: 'removeChild',
    value: function removeChild(character) {
      var childNode = this.getChild(character);

      // Delete childNode only if:
      // - childNode has NO children,
      // - childNode.isCompleteWord === false.
      if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
        this.children.delete(character);
      }

      return this;
    }

    /**
     * @param {string} character
     * @return {boolean}
     */

  }, {
    key: 'hasChild',
    value: function hasChild(character) {
      return this.children.has(character);
    }

    /**
     * Check whether current TrieNode has children or not.
     * @return {boolean}
     */

  }, {
    key: 'hasChildren',
    value: function hasChildren() {
      return this.children.getKeys().length !== 0;
    }

    /**
     * @return {string[]}
     */

  }, {
    key: 'suggestChildren',
    value: function suggestChildren() {
      return [].concat(_toConsumableArray(this.children.getKeys()));
    }

    /**
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      var childrenAsString = this.suggestChildren().toString();
      childrenAsString = childrenAsString ? ':' + childrenAsString : '';
      var isCompleteString = this.isCompleteWord ? '*' : '';

      return '' + this.character + isCompleteString + childrenAsString;
    }
  }]);

  return TrieNode;
}();

exports.default = TrieNode;