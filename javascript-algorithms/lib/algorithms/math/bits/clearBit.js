"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearBit;
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function clearBit(number, bitPosition) {
  var mask = ~(1 << bitPosition);

  return number & mask;
}