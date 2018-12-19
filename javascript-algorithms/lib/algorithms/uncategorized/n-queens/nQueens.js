'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nQueens;

var _QueenPosition = require('./QueenPosition');

var _QueenPosition2 = _interopRequireDefault(_QueenPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {QueenPosition[]} queensPositions
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {boolean}
 */
function isSafe(queensPositions, rowIndex, columnIndex) {
  // New position to which the Queen is going to be placed.
  var newQueenPosition = new _QueenPosition2.default(rowIndex, columnIndex);

  // Check if new queen position conflicts with any other queens.
  for (var queenIndex = 0; queenIndex < queensPositions.length; queenIndex += 1) {
    var currentQueenPosition = queensPositions[queenIndex];

    if (
    // Check if queen has been already placed.
    currentQueenPosition && (
    // Check if there are any queen on the same column.
    newQueenPosition.columnIndex === currentQueenPosition.columnIndex
    // Check if there are any queen on the same row.
    || newQueenPosition.rowIndex === currentQueenPosition.rowIndex
    // Check if there are any queen on the same left diagonal.
    || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal
    // Check if there are any queen on the same right diagonal.
    || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal)) {
      // Can't place queen into current position since there are other queens that
      // are threatening it.
      return false;
    }
  }

  // Looks like we're safe.
  return true;
}

/**
 * @param {QueenPosition[][]} solutions
 * @param {QueenPosition[]} previousQueensPositions
 * @param {number} queensCount
 * @param {number} rowIndex
 * @return {boolean}
 */
function nQueensRecursive(solutions, previousQueensPositions, queensCount, rowIndex) {
  // Clone positions array.
  var queensPositions = [].concat(_toConsumableArray(previousQueensPositions)).map(function (queenPosition) {
    return !queenPosition ? queenPosition : new _QueenPosition2.default(queenPosition.rowIndex, queenPosition.columnIndex);
  });

  if (rowIndex === queensCount) {
    // We've successfully reached the end of the board.
    // Store solution to the list of solutions.
    solutions.push(queensPositions);

    // Solution found.
    return true;
  }

  // Let's try to put queen at row rowIndex into its safe column position.
  for (var columnIndex = 0; columnIndex < queensCount; columnIndex += 1) {
    if (isSafe(queensPositions, rowIndex, columnIndex)) {
      // Place current queen to its current position.
      queensPositions[rowIndex] = new _QueenPosition2.default(rowIndex, columnIndex);

      // Try to place all other queens as well.
      nQueensRecursive(solutions, queensPositions, queensCount, rowIndex + 1);

      // BACKTRACKING.
      // Remove the queen from the row to avoid isSafe() returning false.
      queensPositions[rowIndex] = null;
    }
  }

  return false;
}

/**
 * @param {number} queensCount
 * @return {QueenPosition[][]}
 */
function nQueens(queensCount) {
  // Init NxN chessboard with zeros.
  // const chessboard = Array(queensCount).fill(null).map(() => Array(queensCount).fill(0));

  // This array will hold positions or coordinates of each of
  // N queens in form of [rowIndex, columnIndex].
  var queensPositions = Array(queensCount).fill(null);

  /** @var {QueenPosition[][]} solutions */
  var solutions = [];

  // Solve problem recursively.
  nQueensRecursive(solutions, queensPositions, queensCount, 0);

  return solutions;
}