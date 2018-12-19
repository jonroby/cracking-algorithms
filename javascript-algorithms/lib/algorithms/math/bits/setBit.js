"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setBit;
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function setBit(number, bitPosition) {
  return number | 1 << bitPosition;
}