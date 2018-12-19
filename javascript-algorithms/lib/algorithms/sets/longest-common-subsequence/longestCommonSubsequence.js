'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = longestCommonSubsequence;
/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}
 */
function longestCommonSubsequence(set1, set2) {
  // Init LCS matrix.
  var lcsMatrix = Array(set2.length + 1).fill(null).map(function () {
    return Array(set1.length + 1).fill(null);
  });

  // Fill first row with zeros.
  for (var _columnIndex = 0; _columnIndex <= set1.length; _columnIndex += 1) {
    lcsMatrix[0][_columnIndex] = 0;
  }

  // Fill first column with zeros.
  for (var _rowIndex = 0; _rowIndex <= set2.length; _rowIndex += 1) {
    lcsMatrix[_rowIndex][0] = 0;
  }

  // Fill rest of the column that correspond to each of two strings.
  for (var _rowIndex2 = 1; _rowIndex2 <= set2.length; _rowIndex2 += 1) {
    for (var _columnIndex2 = 1; _columnIndex2 <= set1.length; _columnIndex2 += 1) {
      if (set1[_columnIndex2 - 1] === set2[_rowIndex2 - 1]) {
        lcsMatrix[_rowIndex2][_columnIndex2] = lcsMatrix[_rowIndex2 - 1][_columnIndex2 - 1] + 1;
      } else {
        lcsMatrix[_rowIndex2][_columnIndex2] = Math.max(lcsMatrix[_rowIndex2 - 1][_columnIndex2], lcsMatrix[_rowIndex2][_columnIndex2 - 1]);
      }
    }
  }

  // Calculate LCS based on LCS matrix.
  if (!lcsMatrix[set2.length][set1.length]) {
    // If the length of largest common string is zero then return empty string.
    return [''];
  }

  var longestSequence = [];
  var columnIndex = set1.length;
  var rowIndex = set2.length;

  while (columnIndex > 0 || rowIndex > 0) {
    if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
      // Move by diagonal left-top.
      longestSequence.unshift(set1[columnIndex - 1]);
      columnIndex -= 1;
      rowIndex -= 1;
    } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
      // Move left.
      columnIndex -= 1;
    } else {
      // Move up.
      rowIndex -= 1;
    }
  }

  return longestSequence;
}