'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sort2 = require('../Sort');

var _Sort3 = _interopRequireDefault(_Sort2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MergeSort = function (_Sort) {
  _inherits(MergeSort, _Sort);

  function MergeSort() {
    _classCallCheck(this, MergeSort);

    return _possibleConstructorReturn(this, (MergeSort.__proto__ || Object.getPrototypeOf(MergeSort)).apply(this, arguments));
  }

  _createClass(MergeSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      // Call visiting callback.
      this.callbacks.visitingCallback(null);

      // If array is empty or consists of one element then return this array since it is sorted.
      if (originalArray.length <= 1) {
        return originalArray;
      }

      // Split array on two halves.
      var middleIndex = Math.floor(originalArray.length / 2);
      var leftArray = originalArray.slice(0, middleIndex);
      var rightArray = originalArray.slice(middleIndex, originalArray.length);

      // Sort two halves of split array
      var leftSortedArray = this.sort(leftArray);
      var rightSortedArray = this.sort(rightArray);

      // Merge two sorted arrays into one.
      return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
    }
  }, {
    key: 'mergeSortedArrays',
    value: function mergeSortedArrays(leftArray, rightArray) {
      var sortedArray = [];

      // In case if arrays are not of size 1.
      while (leftArray.length && rightArray.length) {
        var minimumElement = null;

        // Find minimum element of two arrays.
        if (this.comparator.lessThanOrEqual(leftArray[0], rightArray[0])) {
          minimumElement = leftArray.shift();
        } else {
          minimumElement = rightArray.shift();
        }

        // Call visiting callback.
        this.callbacks.visitingCallback(minimumElement);

        // Push the minimum element of two arrays to the sorted array.
        sortedArray.push(minimumElement);
      }

      // If one of two array still have elements we need to just concatenate
      // this element to the sorted array since it is already sorted.
      if (leftArray.length) {
        sortedArray = sortedArray.concat(leftArray);
      }

      if (rightArray.length) {
        sortedArray = sortedArray.concat(rightArray);
      }

      return sortedArray;
    }
  }]);

  return MergeSort;
}(_Sort3.default);

exports.default = MergeSort;