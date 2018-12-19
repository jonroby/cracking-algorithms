'use strict';

var _pascalTriangleRecursive = require('../pascalTriangleRecursive');

var _pascalTriangleRecursive2 = _interopRequireDefault(_pascalTriangleRecursive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('pascalTriangleRecursive', function () {
  it('should calculate Pascal Triangle coefficients for specific line number', function () {
    expect((0, _pascalTriangleRecursive2.default)(0)).toEqual([1]);
    expect((0, _pascalTriangleRecursive2.default)(1)).toEqual([1, 1]);
    expect((0, _pascalTriangleRecursive2.default)(2)).toEqual([1, 2, 1]);
    expect((0, _pascalTriangleRecursive2.default)(3)).toEqual([1, 3, 3, 1]);
    expect((0, _pascalTriangleRecursive2.default)(4)).toEqual([1, 4, 6, 4, 1]);
    expect((0, _pascalTriangleRecursive2.default)(5)).toEqual([1, 5, 10, 10, 5, 1]);
    expect((0, _pascalTriangleRecursive2.default)(6)).toEqual([1, 6, 15, 20, 15, 6, 1]);
    expect((0, _pascalTriangleRecursive2.default)(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });
});