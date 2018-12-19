'use strict';

var _isPowerOfTwoBitwise = require('../isPowerOfTwoBitwise');

var _isPowerOfTwoBitwise2 = _interopRequireDefault(_isPowerOfTwoBitwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isPowerOfTwoBitwise', function () {
  it('should check if the number is made by multiplying twos', function () {
    expect((0, _isPowerOfTwoBitwise2.default)(-1)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(0)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(1)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(2)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(3)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(4)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(5)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(6)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(7)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(8)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(10)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(12)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(16)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(31)).toBe(false);
    expect((0, _isPowerOfTwoBitwise2.default)(64)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(1024)).toBe(true);
    expect((0, _isPowerOfTwoBitwise2.default)(1023)).toBe(false);
  });
});