'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isPowerOfTwo = require('../../../algorithms/math/is-power-of-two/isPowerOfTwo');

var _isPowerOfTwo2 = _interopRequireDefault(_isPowerOfTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SegmentTree = function () {
  /**
   * @param {number[]} inputArray
   * @param {function} operation - binary function (i.e. sum, min)
   * @param {number} operationFallback - operation fallback value (i.e. 0 for sum, Infinity for min)
   */
  function SegmentTree(inputArray, operation, operationFallback) {
    _classCallCheck(this, SegmentTree);

    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    // Init array representation of segment tree.
    this.segmentTree = this.initSegmentTree(this.inputArray);

    this.buildSegmentTree();
  }

  /**
   * @param {number[]} inputArray
   * @return {number[]}
   */


  _createClass(SegmentTree, [{
    key: 'initSegmentTree',
    value: function initSegmentTree(inputArray) {
      var segmentTreeArrayLength = void 0;
      var inputArrayLength = inputArray.length;

      if ((0, _isPowerOfTwo2.default)(inputArrayLength)) {
        // If original array length is a power of two.
        segmentTreeArrayLength = 2 * inputArrayLength - 1;
      } else {
        // If original array length is not a power of two then we need to find
        // next number that is a power of two and use it to calculate
        // tree array size. This is happens because we need to fill empty children
        // in perfect binary tree with nulls.And those nulls need extra space.
        var currentPower = Math.floor(Math.log2(inputArrayLength));
        var nextPower = currentPower + 1;
        var nextPowerOfTwoNumber = Math.pow(2, nextPower);
        segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;
      }

      return new Array(segmentTreeArrayLength).fill(null);
    }

    /**
     * Build segment tree.
     */

  }, {
    key: 'buildSegmentTree',
    value: function buildSegmentTree() {
      var leftIndex = 0;
      var rightIndex = this.inputArray.length - 1;
      var position = 0;
      this.buildTreeRecursively(leftIndex, rightIndex, position);
    }

    /**
     * Build segment tree recursively.
     *
     * @param {number} leftInputIndex
     * @param {number} rightInputIndex
     * @param {number} position
     */

  }, {
    key: 'buildTreeRecursively',
    value: function buildTreeRecursively(leftInputIndex, rightInputIndex, position) {
      // If low input index and high input index are equal that would mean
      // the we have finished splitting and we are already came to the leaf
      // of the segment tree. We need to copy this leaf value from input
      // array to segment tree.
      if (leftInputIndex === rightInputIndex) {
        this.segmentTree[position] = this.inputArray[leftInputIndex];
        return;
      }

      // Split input array on two halves and process them recursively.
      var middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);
      // Process left half of the input array.
      this.buildTreeRecursively(leftInputIndex, middleIndex, this.getLeftChildIndex(position));
      // Process right half of the input array.
      this.buildTreeRecursively(middleIndex + 1, rightInputIndex, this.getRightChildIndex(position));

      // Once every tree leaf is not empty we're able to build tree bottom up using
      // provided operation function.
      this.segmentTree[position] = this.operation(this.segmentTree[this.getLeftChildIndex(position)], this.segmentTree[this.getRightChildIndex(position)]);
    }

    /**
     * Do range query on segment tree in context of this.operation function.
     *
     * @param {number} queryLeftIndex
     * @param {number} queryRightIndex
     * @return {number}
     */

  }, {
    key: 'rangeQuery',
    value: function rangeQuery(queryLeftIndex, queryRightIndex) {
      var leftIndex = 0;
      var rightIndex = this.inputArray.length - 1;
      var position = 0;

      return this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position);
    }

    /**
     * Do range query on segment tree recursively in context of this.operation function.
     *
     * @param {number} queryLeftIndex - left index of the query
     * @param {number} queryRightIndex - right index of the query
     * @param {number} leftIndex - left index of input array segment
     * @param {number} rightIndex - right index of input array segment
     * @param {number} position - root position in binary tree
     * @return {number}
     */

  }, {
    key: 'rangeQueryRecursive',
    value: function rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position) {
      if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
        // Total overlap.
        return this.segmentTree[position];
      }

      if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
        // No overlap.
        return this.operationFallback;
      }

      // Partial overlap.
      var middleIndex = Math.floor((leftIndex + rightIndex) / 2);

      var leftOperationResult = this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, this.getLeftChildIndex(position));

      var rightOperationResult = this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, this.getRightChildIndex(position));

      return this.operation(leftOperationResult, rightOperationResult);
    }

    /**
     * Left child index.
     * @param {number} parentIndex
     * @return {number}
     */

  }, {
    key: 'getLeftChildIndex',
    value: function getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }

    /**
     * Right child index.
     * @param {number} parentIndex
     * @return {number}
     */

  }, {
    key: 'getRightChildIndex',
    value: function getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  }]);

  return SegmentTree;
}();

exports.default = SegmentTree;