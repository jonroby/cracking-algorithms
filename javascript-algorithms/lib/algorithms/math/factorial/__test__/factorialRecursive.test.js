'use strict';

var _factorialRecursive = require('../factorialRecursive');

var _factorialRecursive2 = _interopRequireDefault(_factorialRecursive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('factorialRecursive', function () {
  it('should calculate factorial', function () {
    expect((0, _factorialRecursive2.default)(0)).toBe(1);
    expect((0, _factorialRecursive2.default)(1)).toBe(1);
    expect((0, _factorialRecursive2.default)(5)).toBe(120);
    expect((0, _factorialRecursive2.default)(8)).toBe(40320);
    expect((0, _factorialRecursive2.default)(10)).toBe(3628800);
  });
});