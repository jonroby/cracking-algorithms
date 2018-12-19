'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leastCommonMultiple;

var _euclideanAlgorithm = require('../euclidean-algorithm/euclideanAlgorithm');

var _euclideanAlgorithm2 = _interopRequireDefault(_euclideanAlgorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function leastCommonMultiple(a, b) {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / (0, _euclideanAlgorithm2.default)(a, b);
}