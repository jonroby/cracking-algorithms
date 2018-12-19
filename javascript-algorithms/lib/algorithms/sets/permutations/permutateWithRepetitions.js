"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = permutateWithRepetitions;
/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @return {*[]}
 */
function permutateWithRepetitions(permutationOptions) {
  var permutationLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : permutationOptions.length;

  if (permutationLength === 1) {
    return permutationOptions.map(function (permutationOption) {
      return [permutationOption];
    });
  }

  // Init permutations array.
  var permutations = [];

  // Get smaller permutations.
  var smallerPermutations = permutateWithRepetitions(permutationOptions, permutationLength - 1);

  // Go through all options and join it to the smaller permutations.
  permutationOptions.forEach(function (currentOption) {
    smallerPermutations.forEach(function (smallerPermutation) {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
}