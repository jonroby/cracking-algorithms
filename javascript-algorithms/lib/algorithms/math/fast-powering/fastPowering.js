"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fastPowering;
/**
 * Fast Powering Algorithm.
 * Recursive implementation to compute power.
 *
 * Complexity: log(n)
 *
 * @param {number} base - Number that will be raised to the power.
 * @param {number} power - The power that number will be raised to.
 * @return {number}
 */
function fastPowering(base, power) {
  if (power === 0) {
    // Anything that is raised to the power of zero is 1.
    return 1;
  }

  if (power % 2 === 0) {
    // If the power is even...
    // we may recursively redefine the result via twice smaller powers:
    // x^8 = x^4 * x^4.
    var _multiplier = fastPowering(base, power / 2);
    return _multiplier * _multiplier;
  }

  // If the power is odd...
  // we may recursively redefine the result via twice smaller powers:
  // x^9 = x^4 * x^4 * x.
  var multiplier = fastPowering(base, Math.floor(power / 2));
  return multiplier * multiplier * base;
}