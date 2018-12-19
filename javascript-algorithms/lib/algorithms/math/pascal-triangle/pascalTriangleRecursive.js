"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pascalTriangleRecursive;
/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
function pascalTriangleRecursive(lineNumber) {
  if (lineNumber === 0) {
    return [1];
  }

  var currentLineSize = lineNumber + 1;
  var previousLineSize = currentLineSize - 1;

  // Create container for current line values.
  var currentLine = [];

  // We'll calculate current line based on previous one.
  var previousLine = pascalTriangleRecursive(lineNumber - 1);

  // Let's go through all elements of current line except the first and
  // last one (since they were and will be filled with 1's) and calculate
  // current coefficient based on previous line.
  for (var numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
    var leftCoefficient = numIndex - 1 >= 0 ? previousLine[numIndex - 1] : 0;
    var rightCoefficient = numIndex < previousLineSize ? previousLine[numIndex] : 0;

    currentLine[numIndex] = leftCoefficient + rightCoefficient;
  }

  return currentLine;
}