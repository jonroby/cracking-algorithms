"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = countSetBits;
/**
 * @param {number} originalNumber
 * @return {number}
 */
function countSetBits(originalNumber) {
  var setBitsCount = 0;
  var number = originalNumber;

  while (number) {
    // Add last bit of the number to the sum of set bits.
    setBitsCount += number & 1;

    // Shift number right by one bit to investigate other bits.
    number >>= 1;
  }

  return setBitsCount;
}