"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = euclideanAlgorithm;
/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
function euclideanAlgorithm(originalA, originalB) {
  // Make input numbers positive.
  var a = Math.abs(originalA);
  var b = Math.abs(originalB);

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}