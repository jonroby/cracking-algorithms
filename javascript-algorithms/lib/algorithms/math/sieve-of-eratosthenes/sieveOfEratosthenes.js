"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sieveOfEratosthenes;
/**
 * @param {number} maxNumber
 * @return {number[]}
 */
function sieveOfEratosthenes(maxNumber) {
  var isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  var primes = [];

  for (var number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number);

      /*
       * Optimisation.
       * Start marking multiples of `p` from `p * p`, and not from `2 * p`.
       * The reason why this works is because, at that point, smaller multiples
       * of `p` will have already been marked `false`.
       *
       * Warning: When working with really big numbers, the following line may cause overflow
       * In that case, it can be changed to:
       * let nextNumber = 2 * number;
       */
      var nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
}