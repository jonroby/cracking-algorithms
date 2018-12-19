'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bitsDiff;

var _countSetBits = require('./countSetBits');

var _countSetBits2 = _interopRequireDefault(_countSetBits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB.
 *
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
function bitsDiff(numberA, numberB) {
  return (0, _countSetBits2.default)(numberA ^ numberB);
}