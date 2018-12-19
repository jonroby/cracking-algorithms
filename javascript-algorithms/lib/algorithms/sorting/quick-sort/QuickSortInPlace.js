'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sort2 = require('../Sort');

var _Sort3 = _interopRequireDefault(_Sort2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickSortInPlace = function (_Sort) {
  _inherits(QuickSortInPlace, _Sort);

  function QuickSortInPlace() {
    _classCallCheck(this, QuickSortInPlace);

    return _possibleConstructorReturn(this, (QuickSortInPlace.__proto__ || Object.getPrototypeOf(QuickSortInPlace)).apply(this, arguments));
  }

  _createClass(QuickSortInPlace, [{
    key: 'sort',

    /** Sorting in place avoids unnecessary use of additional memory, but modifies input array.
     *
     * This process is difficult to describe, but much clearer with a visualization:
     * @see: http://www.algomation.com/algorithm/quick-sort-visualization
     *
     * @param {*[]} originalArray - Not sorted array.
     * @param {number} inputLowIndex
     * @param {number} inputHighIndex
     * @param {boolean} recursiveCall
     * @return {*[]} - Sorted array.
     */
    value: function sort(originalArray) {
      var inputLowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _this2 = this;

      var inputHighIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : originalArray.length - 1;
      var recursiveCall = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      // Copies array on initial call, and then sorts in place.
      var array = recursiveCall ? originalArray : [].concat(_toConsumableArray(originalArray));

      /**
       * The partitionArray() operates on the subarray between lowIndex and highIndex, inclusive.
       * It arbitrarily chooses the last element in the subarray as the pivot.
       * Then, it partially sorts the subarray into elements than are less than the pivot,
       * and elements that are greater than or equal to the pivot.
       * Each time partitionArray() is executed, the pivot element is in its final sorted position.
       *
       * @param {number} lowIndex
       * @param {number} highIndex
       * @return {number}
       */
      var partitionArray = function partitionArray(lowIndex, highIndex) {
        /**
         * Swaps two elements in array.
         * @param {number} leftIndex
         * @param {number} rightIndex
         */
        var swap = function swap(leftIndex, rightIndex) {
          var temp = array[leftIndex];
          array[leftIndex] = array[rightIndex];
          array[rightIndex] = temp;
        };

        var pivot = array[highIndex];
        // visitingCallback is used for time-complexity analysis.
        _this2.callbacks.visitingCallback(array[pivot]);

        var partitionIndex = lowIndex;
        for (var currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
          if (_this2.comparator.lessThan(array[currentIndex], pivot)) {
            swap(partitionIndex, currentIndex);
            partitionIndex += 1;
          }
        }

        // The element at the partitionIndex is guaranteed to be greater than or equal to pivot.
        // All elements to the left of partitionIndex are guaranteed to be less than pivot.
        // Swapping the pivot with the partitionIndex therefore places the pivot in its
        // final sorted position.
        swap(partitionIndex, highIndex);

        return partitionIndex;
      };

      // Base case is when low and high converge.
      if (inputLowIndex < inputHighIndex) {
        var partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
        var RECURSIVE_CALL = true;
        this.sort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
        this.sort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
      }

      return array;
    }
  }]);

  return QuickSortInPlace;
}(_Sort3.default);

exports.default = QuickSortInPlace;