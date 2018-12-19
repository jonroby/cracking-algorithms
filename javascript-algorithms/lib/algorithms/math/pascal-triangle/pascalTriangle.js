"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pascalTriangle;
/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
function pascalTriangle(lineNumber) {
  var currentLine = [1];

  var currentLineSize = lineNumber + 1;

  for (var numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README.
    currentLine[numIndex] = currentLine[numIndex - 1] * (lineNumber - numIndex + 1) / numIndex;
  }

  return currentLine;
}