'use strict';

var _isPositive = require('../isPositive');

var _isPositive2 = _interopRequireDefault(_isPositive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isPositive', function () {
  it('should detect if a number is positive', function () {
    expect((0, _isPositive2.default)(1)).toBe(true);
    expect((0, _isPositive2.default)(2)).toBe(true);
    expect((0, _isPositive2.default)(3)).toBe(true);
    expect((0, _isPositive2.default)(5665)).toBe(true);
    expect((0, _isPositive2.default)(56644325)).toBe(true);

    expect((0, _isPositive2.default)(0)).toBe(false);
    expect((0, _isPositive2.default)(-0)).toBe(false);
    expect((0, _isPositive2.default)(-1)).toBe(false);
    expect((0, _isPositive2.default)(-2)).toBe(false);
    expect((0, _isPositive2.default)(-126)).toBe(false);
    expect((0, _isPositive2.default)(-5665)).toBe(false);
    expect((0, _isPositive2.default)(-56644325)).toBe(false);
  });
});