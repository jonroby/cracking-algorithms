"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dpUniquePaths;
/**
 * DYNAMIC PROGRAMMING approach of solving Unique Paths problem.
 *
 * @param {number} width - Width of the board.
 * @param {number} height - Height of the board.
 * @return {number} - Number of unique paths.
 */
function dpUniquePaths(width, height) {
  // Init board.
  var board = Array(height).fill(null).map(function () {
    return Array(width).fill(0);
  });

  // Base case.
  // There is only one way of getting to board[0][any] and
  // there is also only one way of getting to board[any][0].
  // This is because we have a restriction of moving right
  // and down only.
  for (var rowIndex = 0; rowIndex < height; rowIndex += 1) {
    for (var columnIndex = 0; columnIndex < width; columnIndex += 1) {
      if (rowIndex === 0 || columnIndex === 0) {
        board[rowIndex][columnIndex] = 1;
      }
    }
  }

  // Now, since we have this restriction of moving only to the right
  // and down we might say that number of unique paths to the current
  // cell is a sum of numbers of unique paths to the cell above the
  // current one and to the cell to the left of current one.
  for (var _rowIndex = 1; _rowIndex < height; _rowIndex += 1) {
    for (var _columnIndex = 1; _columnIndex < width; _columnIndex += 1) {
      var uniquesFromTop = board[_rowIndex - 1][_columnIndex];
      var uniquesFromLeft = board[_rowIndex][_columnIndex - 1];
      board[_rowIndex][_columnIndex] = uniquesFromTop + uniquesFromLeft;
    }
  }

  return board[height - 1][width - 1];
}