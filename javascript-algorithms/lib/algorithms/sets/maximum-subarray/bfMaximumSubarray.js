"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bfMaximumSubarray;
/**
 * Brute Force solution.
 * Complexity: O(n^2)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */
function bfMaximumSubarray(inputArray) {
  var maxSubarrayStartIndex = 0;
  var maxSubarrayLength = 0;
  var maxSubarraySum = null;

  for (var startIndex = 0; startIndex < inputArray.length; startIndex += 1) {
    var subarraySum = 0;
    for (var arrLength = 1; arrLength <= inputArray.length - startIndex; arrLength += 1) {
      subarraySum += inputArray[startIndex + (arrLength - 1)];
      if (maxSubarraySum === null || subarraySum > maxSubarraySum) {
        maxSubarraySum = subarraySum;
        maxSubarrayStartIndex = startIndex;
        maxSubarrayLength = arrLength;
      }
    }
  }

  return inputArray.slice(maxSubarrayStartIndex, maxSubarrayStartIndex + maxSubarrayLength);
}