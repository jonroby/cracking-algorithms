"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = squareMatrixRotation;
/**
 * @param {*[][]} originalMatrix
 * @return {*[][]}
 */
function squareMatrixRotation(originalMatrix) {
  var matrix = originalMatrix.slice();

  // Do top-right/bottom-left diagonal reflection of the matrix.
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (var columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {
      var _ref = [matrix[rowIndex][columnIndex], matrix[columnIndex][rowIndex]];
      // Swap elements.

      matrix[columnIndex][rowIndex] = _ref[0];
      matrix[rowIndex][columnIndex] = _ref[1];
    }
  }

  // Do horizontal reflection of the matrix.
  for (var _rowIndex = 0; _rowIndex < matrix.length; _rowIndex += 1) {
    for (var _columnIndex = 0; _columnIndex < matrix.length / 2; _columnIndex += 1) {
      var _ref2 = [matrix[_rowIndex][_columnIndex], matrix[_rowIndex][matrix.length - _columnIndex - 1]];
      // Swap elements.

      matrix[_rowIndex][matrix.length - _columnIndex - 1] = _ref2[0];
      matrix[_rowIndex][_columnIndex] = _ref2[1];
    }
  }

  return matrix;
}