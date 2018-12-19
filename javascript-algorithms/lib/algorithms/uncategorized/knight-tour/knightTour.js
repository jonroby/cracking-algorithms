"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = knightTour;
/**
 * @param {number[][]} chessboard
 * @param {number[]} position
 * @return {number[][]}
 */
function getPossibleMoves(chessboard, position) {
  // Generate all knight moves (even those that go beyond the board).
  var possibleMoves = [[position[0] - 1, position[1] - 2], [position[0] - 2, position[1] - 1], [position[0] + 1, position[1] - 2], [position[0] + 2, position[1] - 1], [position[0] - 2, position[1] + 1], [position[0] - 1, position[1] + 2], [position[0] + 1, position[1] + 2], [position[0] + 2, position[1] + 1]];

  // Filter out all moves that go beyond the board.
  return possibleMoves.filter(function (move) {
    var boardSize = chessboard.length;
    return move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize;
  });
}

/**
 * @param {number[][]} chessboard
 * @param {number[]} move
 * @return {boolean}
 */
function isMoveAllowed(chessboard, move) {
  return chessboard[move[0]][move[1]] !== 1;
}

/**
 * @param {number[][]} chessboard
 * @param {number[][]} moves
 * @return {boolean}
 */
function isBoardCompletelyVisited(chessboard, moves) {
  var totalPossibleMovesCount = Math.pow(chessboard.length, 2);
  var existingMovesCount = moves.length;

  return totalPossibleMovesCount === existingMovesCount;
}

/**
 * @param {number[][]} chessboard
 * @param {number[][]} moves
 * @return {boolean}
 */
function knightTourRecursive(chessboard, moves) {
  var currentChessboard = chessboard;

  // If board has been completely visited then we've found a solution.
  if (isBoardCompletelyVisited(currentChessboard, moves)) {
    return true;
  }

  // Get next possible knight moves.
  var lastMove = moves[moves.length - 1];
  var possibleMoves = getPossibleMoves(currentChessboard, lastMove);

  // Try to do next possible moves.
  for (var moveIndex = 0; moveIndex < possibleMoves.length; moveIndex += 1) {
    var currentMove = possibleMoves[moveIndex];

    // Check if current move is allowed. We aren't allowed to go to
    // the same cells twice.
    if (isMoveAllowed(currentChessboard, currentMove)) {
      // Actually do the move.
      moves.push(currentMove);
      currentChessboard[currentMove[0]][currentMove[1]] = 1;

      // If further moves starting from current are successful then
      // return true meaning the solution is found.
      if (knightTourRecursive(currentChessboard, moves)) {
        return true;
      }

      // BACKTRACKING.
      // If current move was unsuccessful then step back and try to do another move.
      moves.pop();
      currentChessboard[currentMove[0]][currentMove[1]] = 0;
    }
  }

  // Return false if we haven't found solution.
  return false;
}

/**
 * @param {number} chessboardSize
 * @return {number[][]}
 */
function knightTour(chessboardSize) {
  // Init chessboard.
  var chessboard = Array(chessboardSize).fill(null).map(function () {
    return Array(chessboardSize).fill(0);
  });

  // Init moves array.
  var moves = [];

  // Do first move and place the knight to the 0x0 cell.
  var firstMove = [0, 0];
  moves.push(firstMove);
  chessboard[firstMove[0]][firstMove[0]] = 1;

  // Recursively try to do the next move.
  var solutionWasFound = knightTourRecursive(chessboard, moves);

  return solutionWasFound ? moves : [];
}