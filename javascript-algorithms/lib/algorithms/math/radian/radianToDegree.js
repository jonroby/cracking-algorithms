"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = radianToDegree;
/**
 * @param {number} radian
 * @return {number}
 */
function radianToDegree(radian) {
  return radian * (180 / Math.PI);
}