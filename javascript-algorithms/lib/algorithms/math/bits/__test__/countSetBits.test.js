'use strict';

var _countSetBits = require('../countSetBits');

var _countSetBits2 = _interopRequireDefault(_countSetBits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('countSetBits', function () {
  it('should return number of set bits', function () {
    expect((0, _countSetBits2.default)(0)).toBe(0);
    expect((0, _countSetBits2.default)(1)).toBe(1);
    expect((0, _countSetBits2.default)(2)).toBe(1);
    expect((0, _countSetBits2.default)(3)).toBe(2);
    expect((0, _countSetBits2.default)(4)).toBe(1);
    expect((0, _countSetBits2.default)(5)).toBe(2);
    expect((0, _countSetBits2.default)(21)).toBe(3);
    expect((0, _countSetBits2.default)(255)).toBe(8);
    expect((0, _countSetBits2.default)(1023)).toBe(10);
  });
});