"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fibonacci;
/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
function fibonacci(n) {
  var fibSequence = [1];

  var currentValue = 1;
  var previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  var iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return fibSequence;
}