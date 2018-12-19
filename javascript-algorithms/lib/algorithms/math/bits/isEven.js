"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEven;
/**
 * @param {number} number
 * @return {boolean}
 */
function isEven(number) {
  return (number & 1) === 0;
}