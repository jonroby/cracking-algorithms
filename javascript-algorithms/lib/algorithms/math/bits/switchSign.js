"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = switchSign;
/**
 * Switch the sign of the number using "Twos Complement" approach.
 * @param {number} number
 * @return {number}
 */
function switchSign(number) {
  return ~number + 1;
}