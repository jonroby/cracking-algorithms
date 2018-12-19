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

var BubbleSort = function (_Sort) {
  _inherits(BubbleSort, _Sort);

  function BubbleSort() {
    _classCallCheck(this, BubbleSort);

    return _possibleConstructorReturn(this, (BubbleSort.__proto__ || Object.getPrototypeOf(BubbleSort)).apply(this, arguments));
  }

  _createClass(BubbleSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      // Flag that holds info about whether the swap has occur or not.
      var swapped = false;
      // Clone original array to prevent its modification.
      var array = [].concat(_toConsumableArray(originalArray));

      for (var i = 1; i < array.length; i += 1) {
        swapped = false;

        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        for (var j = 0; j < array.length - i; j += 1) {
          // Call visiting callback.
          this.callbacks.visitingCallback(array[j]);

          // Swap elements if they are in wrong order.
          if (this.comparator.lessThan(array[j + 1], array[j])) {

            // Register the swap.
            var _ref = [array[j + 1], array[j]];
            array[j] = _ref[0];
            array[j + 1] = _ref[1];
            swapped = true;
          }
        }

        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
          return array;
        }
      }

      return array;
    }
  }]);

  return BubbleSort;
}(_Sort3.default);

exports.default = BubbleSort;