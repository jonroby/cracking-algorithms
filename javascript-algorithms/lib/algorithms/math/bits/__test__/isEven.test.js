'use strict';

var _isEven = require('../isEven');

var _isEven2 = _interopRequireDefault(_isEven);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isEven', function () {
  it('should detect if a number is even', function () {
    expect((0, _isEven2.default)(0)).toBe(true);
    expect((0, _isEven2.default)(2)).toBe(true);
    expect((0, _isEven2.default)(-2)).toBe(true);
    expect((0, _isEven2.default)(1)).toBe(false);
    expect((0, _isEven2.default)(-1)).toBe(false);
    expect((0, _isEven2.default)(-3)).toBe(false);
    expect((0, _isEven2.default)(3)).toBe(false);
    expect((0, _isEven2.default)(8)).toBe(true);
    expect((0, _isEven2.default)(9)).toBe(false);
    expect((0, _isEven2.default)(121)).toBe(false);
    expect((0, _isEven2.default)(122)).toBe(true);
    expect((0, _isEven2.default)(1201)).toBe(false);
    expect((0, _isEven2.default)(1202)).toBe(true);
  });
});