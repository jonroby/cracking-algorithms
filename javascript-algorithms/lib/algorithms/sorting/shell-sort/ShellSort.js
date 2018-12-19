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

var ShellSort = function (_Sort) {
  _inherits(ShellSort, _Sort);

  function ShellSort() {
    _classCallCheck(this, ShellSort);

    return _possibleConstructorReturn(this, (ShellSort.__proto__ || Object.getPrototypeOf(ShellSort)).apply(this, arguments));
  }

  _createClass(ShellSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      // Prevent original array from mutations.
      var array = [].concat(_toConsumableArray(originalArray));

      // Define a gap distance.
      var gap = Math.floor(array.length / 2);

      // Until gap is bigger then zero do elements comparisons and swaps.
      while (gap > 0) {
        // Go and compare all distant element pairs.
        for (var i = 0; i < array.length - gap; i += 1) {
          var currentIndex = i;
          var gapShiftedIndex = i + gap;

          while (currentIndex >= 0) {
            // Call visiting callback.
            this.callbacks.visitingCallback(array[currentIndex]);

            // Compare and swap array elements if needed.
            if (this.comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
              var tmp = array[currentIndex];
              array[currentIndex] = array[gapShiftedIndex];
              array[gapShiftedIndex] = tmp;
            }

            gapShiftedIndex = currentIndex;
            currentIndex -= gap;
          }
        }

        // Shrink the gap.
        gap = Math.floor(gap / 2);
      }

      // Return sorted copy of an original array.
      return array;
    }
  }]);

  return ShellSort;
}(_Sort3.default);

exports.default = ShellSort;