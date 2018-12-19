'use strict';

var _bitLength = require('../bitLength');

var _bitLength2 = _interopRequireDefault(_bitLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bitLength', function () {
  it('should calculate number of bits that the number is consists of', function () {
    expect((0, _bitLength2.default)(0)).toBe(0);
    expect((0, _bitLength2.default)(1)).toBe(1);
    expect((0, _bitLength2.default)(1)).toBe(1);
    expect((0, _bitLength2.default)(5)).toBe(3);
    expect((0, _bitLength2.default)(5)).toBe(3);
    expect((0, _bitLength2.default)(21)).toBe(5);
    expect((0, _bitLength2.default)(245)).toBe(8);
    expect((0, _bitLength2.default)(245)).toBe(8);
  });
});