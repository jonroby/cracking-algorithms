"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factorialRecursive;
/**
 * @param {number} number
 * @return {number}
 */
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}