'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sort2 = require('../Sort');

var _Sort3 = _interopRequireDefault(_Sort2);

var _MinHeap = require('../../../data-structures/heap/MinHeap');

var _MinHeap2 = _interopRequireDefault(_MinHeap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeapSort = function (_Sort) {
  _inherits(HeapSort, _Sort);

  function HeapSort() {
    _classCallCheck(this, HeapSort);

    return _possibleConstructorReturn(this, (HeapSort.__proto__ || Object.getPrototypeOf(HeapSort)).apply(this, arguments));
  }

  _createClass(HeapSort, [{
    key: 'sort',
    value: function sort(originalArray) {
      var _this2 = this;

      var sortedArray = [];
      var minHeap = new _MinHeap2.default(this.callbacks.compareCallback);

      // Insert all array elements to the heap.
      originalArray.forEach(function (element) {
        // Call visiting callback.
        _this2.callbacks.visitingCallback(element);

        minHeap.add(element);
      });

      // Now we have min heap with minimal element always on top.
      // Let's poll that minimal element one by one and thus form the sorted array.
      while (!minHeap.isEmpty()) {
        var nextMinElement = minHeap.poll();

        // Call visiting callback.
        this.callbacks.visitingCallback(nextMinElement);

        sortedArray.push(nextMinElement);
      }

      return sortedArray;
    }
  }]);

  return HeapSort;
}(_Sort3.default);

exports.default = HeapSort;