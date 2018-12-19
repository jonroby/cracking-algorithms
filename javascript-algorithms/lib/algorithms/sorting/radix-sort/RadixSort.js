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

// Using charCode (a = 97, b = 98, etc), we can map characters to buckets from 0 - 25
var BASE_CHAR_CODE = 97;
var NUMBER_OF_POSSIBLE_DIGITS = 10;
var ENGLISH_ALPHABET_LENGTH = 26;

var RadixSort = function (_Sort) {
  _inherits(RadixSort, _Sort);

  function RadixSort() {
    _classCallCheck(this, RadixSort);

    return _possibleConstructorReturn(this, (RadixSort.__proto__ || Object.getPrototypeOf(RadixSort)).apply(this, arguments));
  }

  _createClass(RadixSort, [{
    key: 'sort',

    /**
     * @param {*[]} originalArray
     * @return {*[]}
     */
    value: function sort(originalArray) {
      // Assumes all elements of array are of the same type
      var isArrayOfNumbers = this.isArrayOfNumbers(originalArray);

      var sortedArray = [].concat(_toConsumableArray(originalArray));
      var numPasses = this.determineNumPasses(sortedArray);

      for (var currentIndex = 0; currentIndex < numPasses; currentIndex += 1) {
        var buckets = isArrayOfNumbers ? this.placeElementsInNumberBuckets(sortedArray, currentIndex) : this.placeElementsInCharacterBuckets(sortedArray, currentIndex, numPasses);

        // Flatten buckets into sortedArray, and repeat at next index
        sortedArray = buckets.reduce(function (acc, val) {
          return [].concat(_toConsumableArray(acc), _toConsumableArray(val));
        }, []);
      }

      return sortedArray;
    }

    /**
     * @param {*[]} array
     * @param {number} index
     * @return {*[]}
     */

  }, {
    key: 'placeElementsInNumberBuckets',
    value: function placeElementsInNumberBuckets(array, index) {
      var _this2 = this;

      // See below. These are used to determine which digit to use for bucket allocation
      var modded = Math.pow(10, index + 1);
      var divided = Math.pow(10, index);
      var buckets = this.createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

      array.forEach(function (element) {
        _this2.callbacks.visitingCallback(element);
        if (element < divided) {
          buckets[0].push(element);
        } else {
          /**
           * Say we have element of 1,052 and are currently on index 1 (starting from 0). This means
           * we want to use '5' as the bucket. `modded` would be 10 ** (1 + 1), which
           * is 100. So we take 1,052 % 100 (52) and divide it by 10 (5.2) and floor it (5).
           */
          var currentDigit = Math.floor(element % modded / divided);
          buckets[currentDigit].push(element);
        }
      });

      return buckets;
    }

    /**
     * @param {*[]} array
     * @param {number} index
     * @param {number} numPasses
     * @return {*[]}
     */

  }, {
    key: 'placeElementsInCharacterBuckets',
    value: function placeElementsInCharacterBuckets(array, index, numPasses) {
      var _this3 = this;

      var buckets = this.createBuckets(ENGLISH_ALPHABET_LENGTH);

      array.forEach(function (element) {
        _this3.callbacks.visitingCallback(element);
        var currentBucket = _this3.getCharCodeOfElementAtIndex(element, index, numPasses);
        buckets[currentBucket].push(element);
      });

      return buckets;
    }

    /**
     * @param {string} element
     * @param {number} index
     * @param {number} numPasses
     * @return {number}
     */

  }, {
    key: 'getCharCodeOfElementAtIndex',
    value: function getCharCodeOfElementAtIndex(element, index, numPasses) {
      // Place element in last bucket if not ready to organize
      if (numPasses - index > element.length) {
        return ENGLISH_ALPHABET_LENGTH - 1;
      }

      /**
       * If each character has been organized, use first character to determine bucket,
       * otherwise iterate backwards through element
       */
      var charPos = index > element.length - 1 ? 0 : element.length - index - 1;

      return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE;
    }

    /**
     * Number of passes is determined by the length of the longest element in the array.
     * For integers, this log10(num), and for strings, this would be the length of the string.
     */

  }, {
    key: 'determineNumPasses',
    value: function determineNumPasses(array) {
      return this.getLengthOfLongestElement(array);
    }

    /**
     * @param {*[]} array
     * @return {number}
     */

  }, {
    key: 'getLengthOfLongestElement',
    value: function getLengthOfLongestElement(array) {
      if (this.isArrayOfNumbers(array)) {
        return Math.floor(Math.log10(Math.max.apply(Math, _toConsumableArray(array)))) + 1;
      }

      return array.reduce(function (acc, val) {
        return val.length > acc ? val.length : acc;
      }, -Infinity);
    }

    /**
     * @param {*[]} array
     * @return {boolean}
     */

  }, {
    key: 'isArrayOfNumbers',
    value: function isArrayOfNumbers(array) {
      // Assumes all elements of array are of the same type
      return this.isNumber(array[0]);
    }

    /**
     * @param {number} numBuckets
     * @return {*[]}
     */

  }, {
    key: 'createBuckets',
    value: function createBuckets(numBuckets) {
      /**
       * Mapping buckets to an array instead of filling them with
       * an array prevents each bucket from containing a reference to the same array
       */
      return new Array(numBuckets).fill(null).map(function () {
        return [];
      });
    }

    /**
     * @param {*} element
     * @return {boolean}
     */

  }, {
    key: 'isNumber',
    value: function isNumber(element) {
      return Number.isInteger(element);
    }
  }]);

  return RadixSort;
}(_Sort3.default);

exports.default = RadixSort;