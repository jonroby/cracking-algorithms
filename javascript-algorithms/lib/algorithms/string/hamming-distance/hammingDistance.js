'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hammingDistance;
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function hammingDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error('Strings must be of the same length');
  }

  var distance = 0;

  for (var i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      distance += 1;
    }
  }

  return distance;
}