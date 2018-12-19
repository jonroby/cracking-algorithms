"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factorial;
/**
 * @param {number} number
 * @return {number}
 */
function factorial(number) {
  var result = 1;

  for (var i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}