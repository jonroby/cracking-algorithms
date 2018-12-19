'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Comparator = require('../../utils/comparator/Comparator');

var _Comparator2 = _interopRequireDefault(_Comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */

var Sort = function () {
  function Sort(originalCallbacks) {
    _classCallCheck(this, Sort);

    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new _Comparator2.default(this.callbacks.compareCallback);
  }

  /**
   * @param {SorterCallbacks} originalCallbacks
   * @returns {SorterCallbacks}
   */


  _createClass(Sort, [{
    key: 'sort',
    value: function sort() {
      throw new Error('sort method must be implemented');
    }
  }], [{
    key: 'initSortingCallbacks',
    value: function initSortingCallbacks(originalCallbacks) {
      var callbacks = originalCallbacks || {};
      var stubCallback = function stubCallback() {};

      callbacks.compareCallback = callbacks.compareCallback || undefined;
      callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

      return callbacks;
    }
  }]);

  return Sort;
}();

exports.default = Sort;