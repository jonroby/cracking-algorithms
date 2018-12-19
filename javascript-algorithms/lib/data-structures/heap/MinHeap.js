'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Heap2 = require('./Heap');

var _Heap3 = _interopRequireDefault(_Heap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinHeap = function (_Heap) {
  _inherits(MinHeap, _Heap);

  function MinHeap() {
    _classCallCheck(this, MinHeap);

    return _possibleConstructorReturn(this, (MinHeap.__proto__ || Object.getPrototypeOf(MinHeap)).apply(this, arguments));
  }

  _createClass(MinHeap, [{
    key: 'pairIsInCorrectOrder',

    /**
     * Checks if pair of heap elements is in correct order.
     * For MinHeap the first element must be always smaller or equal.
     * For MaxHeap the first element must be always bigger or equal.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    value: function pairIsInCorrectOrder(firstElement, secondElement) {
      return this.compare.lessThanOrEqual(firstElement, secondElement);
    }
  }]);

  return MinHeap;
}(_Heap3.default);

exports.default = MinHeap;