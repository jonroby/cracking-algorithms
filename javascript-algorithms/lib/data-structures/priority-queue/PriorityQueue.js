'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MinHeap2 = require('../heap/MinHeap');

var _MinHeap3 = _interopRequireDefault(_MinHeap2);

var _Comparator = require('../../utils/comparator/Comparator');

var _Comparator2 = _interopRequireDefault(_Comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// It is the same as min heap except that when comparing to elements
// we take into account not element's value but rather its priority.
var PriorityQueue = function (_MinHeap) {
  _inherits(PriorityQueue, _MinHeap);

  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    var _this = _possibleConstructorReturn(this, (PriorityQueue.__proto__ || Object.getPrototypeOf(PriorityQueue)).call(this));

    _this.priorities = {};
    _this.compare = new _Comparator2.default(_this.comparePriority.bind(_this));
    return _this;
  }

  /**
   * @param {*} item
   * @param {number} [priority]
   * @return {PriorityQueue}
   */


  _createClass(PriorityQueue, [{
    key: 'add',
    value: function add(item) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.priorities[item] = priority;
      _get(PriorityQueue.prototype.__proto__ || Object.getPrototypeOf(PriorityQueue.prototype), 'add', this).call(this, item);

      return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [customFindingComparator]
     * @return {PriorityQueue}
     */

  }, {
    key: 'remove',
    value: function remove(item, customFindingComparator) {
      _get(PriorityQueue.prototype.__proto__ || Object.getPrototypeOf(PriorityQueue.prototype), 'remove', this).call(this, item, customFindingComparator);
      delete this.priorities[item];

      return this;
    }

    /**
     * @param {*} item
     * @param {number} priority
     * @return {PriorityQueue}
     */

  }, {
    key: 'changePriority',
    value: function changePriority(item, priority) {
      this.remove(item, new _Comparator2.default(this.compareValue));
      this.add(item, priority);

      return this;
    }

    /**
     * @param {*} item
     * @return {Number[]}
     */

  }, {
    key: 'findByValue',
    value: function findByValue(item) {
      return this.find(item, new _Comparator2.default(this.compareValue));
    }

    /**
     * @param {*} item
     * @return {boolean}
     */

  }, {
    key: 'hasValue',
    value: function hasValue(item) {
      return this.findByValue(item).length > 0;
    }

    /**
     * @param {*} a
     * @param {*} b
     * @return {number}
     */

  }, {
    key: 'comparePriority',
    value: function comparePriority(a, b) {
      if (this.priorities[a] === this.priorities[b]) {
        return 0;
      }

      return this.priorities[a] < this.priorities[b] ? -1 : 1;
    }

    /**
     * @param {*} a
     * @param {*} b
     * @return {number}
     */

  }, {
    key: 'compareValue',
    value: function compareValue(a, b) {
      if (a === b) {
        return 0;
      }

      return a < b ? -1 : 1;
    }
  }]);

  return PriorityQueue;
}(_MinHeap3.default);

exports.default = PriorityQueue;