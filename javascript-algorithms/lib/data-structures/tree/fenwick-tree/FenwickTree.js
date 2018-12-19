'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FenwickTree = function () {
  /**
   * Constructor creates empty fenwick tree of size 'arraySize',
   * however, array size is size+1, because index is 1-based.
   *
   * @param  {number} arraySize
   */
  function FenwickTree(arraySize) {
    _classCallCheck(this, FenwickTree);

    this.arraySize = arraySize;

    // Fill tree array with zeros.
    this.treeArray = Array(this.arraySize + 1).fill(0);
  }

  /**
   * Adds value to existing value at position.
   *
   * @param  {number} position
   * @param  {number} value
   * @return {FenwickTree}
   */


  _createClass(FenwickTree, [{
    key: 'increase',
    value: function increase(position, value) {
      if (position < 1 || position > this.arraySize) {
        throw new Error('Position is out of allowed range');
      }

      for (var i = position; i <= this.arraySize; i += i & -i) {
        this.treeArray[i] += value;
      }

      return this;
    }

    /**
     * Query sum from index 1 to position.
     *
     * @param  {number} position
     * @return {number}
     */

  }, {
    key: 'query',
    value: function query(position) {
      if (position < 1 || position > this.arraySize) {
        throw new Error('Position is out of allowed range');
      }

      var sum = 0;

      for (var i = position; i > 0; i -= i & -i) {
        sum += this.treeArray[i];
      }

      return sum;
    }

    /**
     * Query sum from index leftIndex to rightIndex.
     *
     * @param  {number} leftIndex
     * @param  {number} rightIndex
     * @return {number}
     */

  }, {
    key: 'queryRange',
    value: function queryRange(leftIndex, rightIndex) {
      if (leftIndex > rightIndex) {
        throw new Error('Left index can not be greater than right one');
      }

      if (leftIndex === 1) {
        return this.query(rightIndex);
      }

      return this.query(rightIndex) - this.query(leftIndex - 1);
    }
  }]);

  return FenwickTree;
}();

exports.default = FenwickTree;