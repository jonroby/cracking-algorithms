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

var InsertionSort = function (_Sort) {
  _inherits(InsertionSort, _Sort);

  function InsertionSort() {
    _classCallCheck(this, InsertionSort);

    return _possibleConstructorReturn(this, (InsertionSort.__proto__ || Object.getPrototypeOf(InsertionSort)).apply(this, arguments));
  }

  _createClass(InsertionSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      var array = [].concat(_toConsumableArray(originalArray));

      // Go through all array elements...
      for (var i = 0; i < array.length; i += 1) {
        var currentIndex = i;

        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        // Go and check if previous elements and greater then current one.
        // If this is the case then swap that elements.
        while (array[currentIndex - 1] !== undefined && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])) {
          // Call visiting callback.
          this.callbacks.visitingCallback(array[currentIndex - 1]);

          // Swap the elements.
          var tmp = array[currentIndex - 1];
          array[currentIndex - 1] = array[currentIndex];
          array[currentIndex] = tmp;

          // Shift current index left.
          currentIndex -= 1;
        }
      }

      return array;
    }
  }]);

  return InsertionSort;
}(_Sort3.default);

exports.default = InsertionSort;