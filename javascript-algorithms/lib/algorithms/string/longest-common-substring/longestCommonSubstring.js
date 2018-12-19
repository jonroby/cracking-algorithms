'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = longestCommonSubstring;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {string} string1
 * @param {string} string2
 * @return {string}
 */
function longestCommonSubstring(string1, string2) {
  // Convert strings to arrays to treat unicode symbols length correctly.
  // For example:
  // '𐌵'.length === 2
  // [...'𐌵'].length === 1
  var s1 = [].concat(_toConsumableArray(string1));
  var s2 = [].concat(_toConsumableArray(string2));

  // Init the matrix of all substring lengths to use Dynamic Programming approach.
  var substringMatrix = Array(s2.length + 1).fill(null).map(function () {
    return Array(s1.length + 1).fill(null);
  });

  // Fill the first row and first column with zeros to provide initial values.
  for (var columnIndex = 0; columnIndex <= s1.length; columnIndex += 1) {
    substringMatrix[0][columnIndex] = 0;
  }

  for (var rowIndex = 0; rowIndex <= s2.length; rowIndex += 1) {
    substringMatrix[rowIndex][0] = 0;
  }

  // Build the matrix of all substring lengths to use Dynamic Programming approach.
  var longestSubstringLength = 0;
  var longestSubstringColumn = 0;
  var longestSubstringRow = 0;

  for (var _rowIndex = 1; _rowIndex <= s2.length; _rowIndex += 1) {
    for (var _columnIndex = 1; _columnIndex <= s1.length; _columnIndex += 1) {
      if (s1[_columnIndex - 1] === s2[_rowIndex - 1]) {
        substringMatrix[_rowIndex][_columnIndex] = substringMatrix[_rowIndex - 1][_columnIndex - 1] + 1;
      } else {
        substringMatrix[_rowIndex][_columnIndex] = 0;
      }

      // Try to find the biggest length of all common substring lengths
      // and to memorize its last character position (indices)
      if (substringMatrix[_rowIndex][_columnIndex] > longestSubstringLength) {
        longestSubstringLength = substringMatrix[_rowIndex][_columnIndex];
        longestSubstringColumn = _columnIndex;
        longestSubstringRow = _rowIndex;
      }
    }
  }

  if (longestSubstringLength === 0) {
    // Longest common substring has not been found.
    return '';
  }

  // Detect the longest substring from the matrix.
  var longestSubstring = '';

  while (substringMatrix[longestSubstringRow][longestSubstringColumn] > 0) {
    longestSubstring = s1[longestSubstringColumn - 1] + longestSubstring;
    longestSubstringRow -= 1;
    longestSubstringColumn -= 1;
  }

  return longestSubstring;
}