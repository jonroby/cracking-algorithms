"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dpTopDownJumpGame;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * DYNAMIC PROGRAMMING TOP-DOWN approach of solving Jump Game.
 *
 * This comes out as an optimisation of BACKTRACKING approach.
 *
 * It relies on the observation that once we determine that a certain
 * index is good / bad, this result will never change. This means that
 * we can store the result and not need to recompute it every time.
 *
 * We call a position in the array a "good" one if starting at that
 * position, we can reach the last index. Otherwise, that index
 * is called a "bad" one.
 *
 * @param {number[]} numbers - array of possible jump length.
 * @param {number} startIndex - index from where we start jumping.
 * @param {number[]} currentJumps - current jumps path.
 * @param {boolean[]} cellsGoodness - holds information about whether cell is "good" or "bad"
 * @return {boolean}
 */
function dpTopDownJumpGame(numbers) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentJumps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var cellsGoodness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (startIndex === numbers.length - 1) {
    // We've jumped directly to last cell. This situation is a solution.
    return true;
  }

  // Init cell goodness table if it is empty.
  // This is DYNAMIC PROGRAMMING feature.
  var currentCellsGoodness = [].concat(_toConsumableArray(cellsGoodness));
  if (!currentCellsGoodness.length) {
    numbers.forEach(function () {
      return currentCellsGoodness.push(undefined);
    });
    // Mark the last cell as "good" one since it is where we ultimately want to get.
    currentCellsGoodness[cellsGoodness.length - 1] = true;
  }

  // Check what the longest jump we could make from current position.
  // We don't need to jump beyond the array.
  var maxJumpLength = Math.min(numbers[startIndex], // Jump is within array.
  numbers.length - 1 - startIndex // Jump goes beyond array.
  );

  // Let's start jumping from startIndex and see whether any
  // jump is successful and has reached the end of the array.
  for (var jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    // Try next jump.
    var nextIndex = startIndex + jumpLength;

    // Jump only into "good" or "unknown" cells.
    // This is top-down dynamic programming optimisation of backtracking algorithm.
    if (currentCellsGoodness[nextIndex] !== false) {
      currentJumps.push(nextIndex);

      var isJumpSuccessful = dpTopDownJumpGame(numbers, nextIndex, currentJumps, currentCellsGoodness);

      // Check if current jump was successful.
      if (isJumpSuccessful) {
        return true;
      }

      // BACKTRACKING.
      // If previous jump wasn't successful then retreat and try the next one.
      currentJumps.pop();

      // Mark current cell as "bad" to avoid its deep visiting later.
      currentCellsGoodness[nextIndex] = false;
    }
  }

  return false;
}