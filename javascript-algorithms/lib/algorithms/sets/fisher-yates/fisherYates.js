"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fisherYates;
/**
 * @param {*[]} originalArray
 * @return {*[]}
 */
function fisherYates(originalArray) {
  // Clone array from preventing original array from modification (for testing purpose).
  var array = originalArray.slice(0);

  for (var i = array.length - 1; i > 0; i -= 1) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var _ref = [array[randomIndex], array[i]];
    array[i] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
}