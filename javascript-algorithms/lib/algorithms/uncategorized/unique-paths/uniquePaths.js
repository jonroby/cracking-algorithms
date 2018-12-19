'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniquePaths;

var _pascalTriangle = require('../../math/pascal-triangle/pascalTriangle');

var _pascalTriangle2 = _interopRequireDefault(_pascalTriangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {number} width
 * @param {number} height
 * @return {number}
 */
function uniquePaths(width, height) {
  var pascalLine = width + height - 2;
  var pascalLinePosition = Math.min(width, height) - 1;

  return (0, _pascalTriangle2.default)(pascalLine)[pascalLinePosition];
}