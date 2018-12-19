'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regularExpressionMatching;
var ZERO_OR_MORE_CHARS = '*';
var ANY_CHAR = '.';

/**
 * Dynamic programming approach.
 *
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
function regularExpressionMatching(string, pattern) {
  /*
    * Let's initiate dynamic programming matrix for this string and pattern.
    * We will have pattern characters on top (as columns) and string characters
    * will be placed to the left of the table (as rows).
    *
    * Example:
    *
    *     a * b . b
    *   - - - - - -
    * a - - - - - -
    * a - - - - - -
    * b - - - - - -
    * y - - - - - -
    * b - - - - - -
   */
  var matchMatrix = Array(string.length + 1).fill(null).map(function () {
    return Array(pattern.length + 1).fill(null);
  });

  // Let's fill the top-left cell with true. This would mean that empty
  // string '' matches to empty pattern ''.
  matchMatrix[0][0] = true;

  // Let's fill the first row of the matrix with false. That would mean that
  // empty string can't match any non-empty pattern.
  //
  // Example:
  // string: ''
  // pattern: 'a.z'
  //
  // The one exception here is patterns like a*b* that matches the empty string.
  for (var columnIndex = 1; columnIndex <= pattern.length; columnIndex += 1) {
    var patternIndex = columnIndex - 1;

    if (pattern[patternIndex] === ZERO_OR_MORE_CHARS) {
      matchMatrix[0][columnIndex] = matchMatrix[0][columnIndex - 2];
    } else {
      matchMatrix[0][columnIndex] = false;
    }
  }

  // Let's fill the first column with false. That would mean that empty pattern
  // can't match any non-empty string.
  //
  // Example:
  // string: 'ab'
  // pattern: ''
  for (var rowIndex = 1; rowIndex <= string.length; rowIndex += 1) {
    matchMatrix[rowIndex][0] = false;
  }

  // Not let's go through every letter of the pattern and every letter of
  // the string and compare them one by one.
  for (var _rowIndex = 1; _rowIndex <= string.length; _rowIndex += 1) {
    for (var _columnIndex = 1; _columnIndex <= pattern.length; _columnIndex += 1) {
      // Take into account that fact that matrix contain one extra column and row.
      var stringIndex = _rowIndex - 1;
      var _patternIndex = _columnIndex - 1;

      if (pattern[_patternIndex] === ZERO_OR_MORE_CHARS) {
        /*
         * In case if current pattern character is special '*' character we have
         * two options:
         *
         * 1. Since * char allows it previous char to not be presented in a string we
         * need to check if string matches the pattern without '*' char and without the
         * char that goes before '*'. That would mean to go two positions left on the
         * same row.
         *
         * 2. Since * char allows it previous char to be presented in a string many times we
         * need to check if char before * is the same as current string char. If they are the
         * same that would mean that current string matches the current pattern in case if
         * the string WITHOUT current char matches the same pattern. This would mean to go
         * one position up in the same row.
         */
        if (matchMatrix[_rowIndex][_columnIndex - 2] === true) {
          matchMatrix[_rowIndex][_columnIndex] = true;
        } else if ((pattern[_patternIndex - 1] === string[stringIndex] || pattern[_patternIndex - 1] === ANY_CHAR) && matchMatrix[_rowIndex - 1][_columnIndex] === true) {
          matchMatrix[_rowIndex][_columnIndex] = true;
        } else {
          matchMatrix[_rowIndex][_columnIndex] = false;
        }
      } else if (pattern[_patternIndex] === string[stringIndex] || pattern[_patternIndex] === ANY_CHAR) {
        /*
         * In case if current pattern char is the same as current string char
         * or it may be any character (in case if pattern contains '.' char)
         * we need to check if there was a match for the pattern and for the
         * string by WITHOUT current char. This would mean that we may copy
         * left-top diagonal value.
         *
         * Example:
         *
         *   a b
         * a 1 -
         * b - 1
         */
        matchMatrix[_rowIndex][_columnIndex] = matchMatrix[_rowIndex - 1][_columnIndex - 1];
      } else {
        /*
         * In case if pattern char and string char are different we may
         * treat this case as "no-match".
         *
         * Example:
         *
         *   a b
         * a - -
         * c - 0
         */
        matchMatrix[_rowIndex][_columnIndex] = false;
      }
    }
  }

  return matchMatrix[string.length][pattern.length];
}