'use strict';

var _isPowerOfTwo = require('../isPowerOfTwo');

var _isPowerOfTwo2 = _interopRequireDefault(_isPowerOfTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isPowerOfTwo', function () {
  it('should detect if the number is power of two', function () {
    expect((0, _isPowerOfTwo2.default)(1)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(2)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(3)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(4)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(5)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(6)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(7)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(8)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(9)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(16)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(23)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(32)).toBe(true);
    expect((0, _isPowerOfTwo2.default)(127)).toBe(false);
    expect((0, _isPowerOfTwo2.default)(128)).toBe(true);
  });
});