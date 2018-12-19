"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bfRainTerraces;
/**
 * BRUTE FORCE approach of solving Trapping Rain Water problem.
 *
 * @param {number[]} terraces
 * @return {number}
 */
function bfRainTerraces(terraces) {
  var waterAmount = 0;

  for (var terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
    // Get left most high terrace.
    var leftHighestLevel = 0;
    for (var leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }

    // Get right most high terrace.
    var rightHighestLevel = 0;
    for (var rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex += 1) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    // Add current terrace water amount.
    var terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      // Terrace will be able to store the water if the lowest of two left and right highest
      // terraces are still higher than the current one.
      waterAmount += Math.min(leftHighestLevel, rightHighestLevel) - terraces[terraceIndex];
    }
  }

  return waterAmount;
}