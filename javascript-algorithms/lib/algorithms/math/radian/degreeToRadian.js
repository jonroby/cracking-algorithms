"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = degreeToRadian;
/**
 * @param {number} degree
 * @return {number}
 */
function degreeToRadian(degree) {
  return degree * (Math.PI / 180);
}