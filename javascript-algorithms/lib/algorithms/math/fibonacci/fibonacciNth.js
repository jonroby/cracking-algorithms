"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fibonacciNth;
/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
function fibonacciNth(n) {
  var currentValue = 1;
  var previousValue = 0;

  if (n === 1) {
    return 1;
  }

  var iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    iterationsCounter -= 1;
  }

  return currentValue;
}