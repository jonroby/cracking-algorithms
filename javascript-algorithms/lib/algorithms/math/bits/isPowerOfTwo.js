"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPowerOfTwo;
/**
 * @param {number} number
 * @return bool
 */
function isPowerOfTwo(number) {
  return (number & number - 1) === 0;
}