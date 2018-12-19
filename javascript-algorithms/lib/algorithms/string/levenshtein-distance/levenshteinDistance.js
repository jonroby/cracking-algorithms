"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = levenshteinDistance;
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function levenshteinDistance(a, b) {
  // Create empty edit distance matrix for all possible modifications of
  // substrings of a to substrings of b.
  var distanceMatrix = Array(b.length + 1).fill(null).map(function () {
    return Array(a.length + 1).fill(null);
  });

  // Fill the first row of the matrix.
  // If this is first row then we're transforming empty string to a.
  // In this case the number of transformations equals to size of a substring.
  for (var i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  // Fill the first column of the matrix.
  // If this is first column then we're transforming empty string to b.
  // In this case the number of transformations equals to size of b substring.
  for (var j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (var _j = 1; _j <= b.length; _j += 1) {
    for (var _i = 1; _i <= a.length; _i += 1) {
      var indicator = a[_i - 1] === b[_j - 1] ? 0 : 1;
      distanceMatrix[_j][_i] = Math.min(distanceMatrix[_j][_i - 1] + 1, // deletion
      distanceMatrix[_j - 1][_i] + 1, // insertion
      distanceMatrix[_j - 1][_i - 1] + indicator // substitution
      );
    }
  }

  return distanceMatrix[b.length][a.length];
}