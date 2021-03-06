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

var QuickSort = function (_Sort) {
  _inherits(QuickSort, _Sort);

  function QuickSort() {
    _classCallCheck(this, QuickSort);

    return _possibleConstructorReturn(this, (QuickSort.__proto__ || Object.getPrototypeOf(QuickSort)).apply(this, arguments));
  }

  _createClass(QuickSort, [{
    key: 'sort',

    /**
     * @param {*[]} originalArray
     * @return {*[]}
     */
    value: function sort(originalArray) {
      // Clone original array to prevent it from modification.
      var array = [].concat(_toConsumableArray(originalArray));

      // If array has less than or equal to one elements then it is already sorted.
      if (array.length <= 1) {
        return array;
      }

      // Init left and right arrays.
      var leftArray = [];
      var rightArray = [];

      // Take the first element of array as a pivot.
      var pivotElement = array.shift();
      var centerArray = [pivotElement];

      // Split all array elements between left, center and right arrays.
      while (array.length) {
        var currentElement = array.shift();

        // Call visiting callback.
        this.callbacks.visitingCallback(currentElement);

        if (this.comparator.equal(currentElement, pivotElement)) {
          centerArray.push(currentElement);
        } else if (this.comparator.lessThan(currentElement, pivotElement)) {
          leftArray.push(currentElement);
        } else {
          rightArray.push(currentElement);
        }
      }

      // Sort left and right arrays.
      var leftArraySorted = this.sort(leftArray);
      var rightArraySorted = this.sort(rightArray);

      // Let's now join sorted left array with center array and with sorted right array.
      return leftArraySorted.concat(centerArray, rightArraySorted);
    }
  }]);

  return QuickSort;
}(_Sort3.default);

exports.default = QuickSort;