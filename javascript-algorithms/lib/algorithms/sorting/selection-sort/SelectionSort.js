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

var SelectionSort = function (_Sort) {
  _inherits(SelectionSort, _Sort);

  function SelectionSort() {
    _classCallCheck(this, SelectionSort);

    return _possibleConstructorReturn(this, (SelectionSort.__proto__ || Object.getPrototypeOf(SelectionSort)).apply(this, arguments));
  }

  _createClass(SelectionSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      // Clone original array to prevent its modification.
      var array = [].concat(_toConsumableArray(originalArray));

      for (var i = 0; i < array.length - 1; i += 1) {
        var minIndex = i;

        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        // Find minimum element in the rest of array.
        for (var j = i + 1; j < array.length; j += 1) {
          // Call visiting callback.
          this.callbacks.visitingCallback(array[j]);

          if (this.comparator.lessThan(array[j], array[minIndex])) {
            minIndex = j;
          }
        }

        // If new minimum element has been found then swap it with current i-th element.
        if (minIndex !== i) {
          var _ref = [array[minIndex], array[i]];
          array[i] = _ref[0];
          array[minIndex] = _ref[1];
        }
      }

      return array;
    }
  }]);

  return SelectionSort;
}(_Sort3.default);

exports.default = SelectionSort;