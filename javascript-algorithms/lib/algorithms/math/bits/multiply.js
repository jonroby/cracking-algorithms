'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multiply;

var _multiplyByTwo = require('./multiplyByTwo');

var _multiplyByTwo2 = _interopRequireDefault(_multiplyByTwo);

var _divideByTwo = require('./divideByTwo');

var _divideByTwo2 = _interopRequireDefault(_divideByTwo);

var _isEven = require('./isEven');

var _isEven2 = _interopRequireDefault(_isEven);

var _isPositive = require('./isPositive');

var _isPositive2 = _interopRequireDefault(_isPositive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Multiply two signed numbers using bitwise operations.
 *
 * If a is zero or b is zero or if both a and b are zeros:
 * multiply(a, b) = 0
 *
 * If b is even:
 * multiply(a, b) = multiply(2a, b/2)
 *
 * If b is odd and b is positive:
 * multiply(a, b) = multiply(2a, (b-1)/2) + a
 *
 * If b is odd and b is negative:
 * multiply(a, b) = multiply(2a, (b+1)/2) - a
 *
 * Time complexity: O(log b)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function multiply(a, b) {
  // If a is zero or b is zero or if both a and b are zeros then the production is also zero.
  if (b === 0 || a === 0) {
    return 0;
  }

  // Otherwise we will have four different cases that are described above.
  var multiplyByOddPositive = function multiplyByOddPositive() {
    return multiply((0, _multiplyByTwo2.default)(a), (0, _divideByTwo2.default)(b - 1)) + a;
  };
  var multiplyByOddNegative = function multiplyByOddNegative() {
    return multiply((0, _multiplyByTwo2.default)(a), (0, _divideByTwo2.default)(b + 1)) - a;
  };

  var multiplyByEven = function multiplyByEven() {
    return multiply((0, _multiplyByTwo2.default)(a), (0, _divideByTwo2.default)(b));
  };
  var multiplyByOdd = function multiplyByOdd() {
    return (0, _isPositive2.default)(b) ? multiplyByOddPositive() : multiplyByOddNegative();
  };

  return (0, _isEven2.default)(b) ? multiplyByEven() : multiplyByOdd();
}