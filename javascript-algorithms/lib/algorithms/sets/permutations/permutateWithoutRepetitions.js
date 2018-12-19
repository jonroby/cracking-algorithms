"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = permutateWithoutRepetitions;
/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  // Init permutations array.
  var permutations = [];

  // Get all permutations for permutationOptions excluding the first element.
  var smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

  // Insert first option into every possible position of every smaller permutation.
  var firstOption = permutationOptions[0];

  for (var permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
    var smallerPermutation = smallerPermutations[permIndex];

    // Insert first option into every possible position of smallerPermutation.
    for (var positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
      var permutationPrefix = smallerPermutation.slice(0, positionIndex);
      var permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}