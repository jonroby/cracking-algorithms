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

var CountingSort = function (_Sort) {
  _inherits(CountingSort, _Sort);

  function CountingSort() {
    _classCallCheck(this, CountingSort);

    return _possibleConstructorReturn(this, (CountingSort.__proto__ || Object.getPrototypeOf(CountingSort)).apply(this, arguments));
  }

  _createClass(CountingSort, [{
    key: 'sort',

    /**
     * @param {number[]} originalArray
     * @param {number} [smallestElement]
     * @param {number} [biggestElement]
     */
    value: function sort(originalArray) {
      var _this2 = this;

      var smallestElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var biggestElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      // Init biggest and smallest elements in array in order to build number bucket array later.
      var detectedSmallestElement = smallestElement || 0;
      var detectedBiggestElement = biggestElement || 0;

      if (smallestElement === undefined || biggestElement === undefined) {
        originalArray.forEach(function (element) {
          // Visit element.
          _this2.callbacks.visitingCallback(element);

          // Detect biggest element.
          if (_this2.comparator.greaterThan(element, detectedBiggestElement)) {
            detectedBiggestElement = element;
          }

          // Detect smallest element.
          if (_this2.comparator.lessThan(element, detectedSmallestElement)) {
            detectedSmallestElement = element;
          }
        });
      }

      // Init buckets array.
      // This array will hold frequency of each number from originalArray.
      var buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

      originalArray.forEach(function (element) {
        // Visit element.
        _this2.callbacks.visitingCallback(element);

        buckets[element - detectedSmallestElement] += 1;
      });

      // Add previous frequencies to the current one for each number in bucket
      // to detect how many numbers less then current one should be standing to
      // the left of current one.
      for (var bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
        buckets[bucketIndex] += buckets[bucketIndex - 1];
      }

      // Now let's shift frequencies to the right so that they show correct numbers.
      // I.e. if we won't shift right than the value of buckets[5] will display how many
      // elements less than 5 should be placed to the left of 5 in sorted array
      // INCLUDING 5th. After shifting though this number will not include 5th anymore.
      buckets.pop();
      buckets.unshift(0);

      // Now let's assemble sorted array.
      var sortedArray = Array(originalArray.length).fill(null);
      for (var elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
        // Get the element that we want to put into correct sorted position.
        var element = originalArray[elementIndex];

        // Visit element.
        this.callbacks.visitingCallback(element);

        // Get correct position of this element in sorted array.
        var elementSortedPosition = buckets[element - detectedSmallestElement];

        // Put element into correct position in sorted array.
        sortedArray[elementSortedPosition] = element;

        // Increase position of current element in the bucket for future correct placements.
        buckets[element - detectedSmallestElement] += 1;
      }

      // Return sorted array.
      return sortedArray;
    }
  }]);

  return CountingSort;
}(_Sort3.default);

exports.default = CountingSort;