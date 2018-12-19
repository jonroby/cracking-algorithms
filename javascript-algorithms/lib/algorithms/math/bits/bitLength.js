"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bitLength;
/**
 * Return the number of bits used in the binary representation of the number.
 *
 * @param {number} number
 * @return {number}
 */
function bitLength(number) {
  var bitsCounter = 0;

  while (1 << bitsCounter <= number) {
    bitsCounter += 1;
  }

  return bitsCounter;
}