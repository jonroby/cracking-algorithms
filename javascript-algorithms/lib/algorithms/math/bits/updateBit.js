"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateBit;
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @param {number} bitValue - 0 or 1.
 * @return {number}
 */
function updateBit(number, bitPosition, bitValue) {
  // Normalized bit value.
  var bitValueNormalized = bitValue ? 1 : 0;

  // Init clear mask.
  var clearMask = ~(1 << bitPosition);

  // Clear bit value and then set it up to required value.
  return number & clearMask | bitValueNormalized << bitPosition;
}