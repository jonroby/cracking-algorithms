"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = dpRainTerraces;
/**
 * DYNAMIC PROGRAMMING approach of solving Trapping Rain Water problem.
 *
 * @param {number[]} terraces
 * @return {number}
 */
function dpRainTerraces(terraces) {
  var waterAmount = 0;

  // Init arrays that will keep the list of left and right maximum levels for specific positions.
  var leftMaxLevels = new Array(terraces.length).fill(0);
  var rightMaxLevels = new Array(terraces.length).fill(0);

  // Calculate the highest terrace level from the LEFT relative to the current terrace.

  var _terraces = _slicedToArray(terraces, 1);

  leftMaxLevels[0] = _terraces[0];

  for (var terraceIndex = 1; terraceIndex < terraces.length; terraceIndex += 1) {
    leftMaxLevels[terraceIndex] = Math.max(terraces[terraceIndex], leftMaxLevels[terraceIndex - 1]);
  }

  // Calculate the highest terrace level from the RIGHT relative to the current terrace.
  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
  for (var _terraceIndex = terraces.length - 2; _terraceIndex >= 0; _terraceIndex -= 1) {
    rightMaxLevels[_terraceIndex] = Math.max(terraces[_terraceIndex], rightMaxLevels[_terraceIndex + 1]);
  }

  // Not let's go through all terraces one by one and calculate how much water
  // each terrace may accumulate based on previously calculated values.
  for (var _terraceIndex2 = 0; _terraceIndex2 < terraces.length; _terraceIndex2 += 1) {
    // Pick the lowest from the left/right highest terraces.
    var currentTerraceBoundary = Math.min(leftMaxLevels[_terraceIndex2], rightMaxLevels[_terraceIndex2]);

    if (currentTerraceBoundary > terraces[_terraceIndex2]) {
      waterAmount += currentTerraceBoundary - terraces[_terraceIndex2];
    }
  }

  return waterAmount;
}