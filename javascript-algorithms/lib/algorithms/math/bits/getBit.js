"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBit;
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function getBit(number, bitPosition) {
  return number >> bitPosition & 1;
}