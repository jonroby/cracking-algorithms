'use strict';

var _clearBit = require('../clearBit');

var _clearBit2 = _interopRequireDefault(_clearBit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('clearBit', function () {
  it('should clear bit at specific position', function () {
    // 1 = 0b0001
    expect((0, _clearBit2.default)(1, 0)).toBe(0);
    expect((0, _clearBit2.default)(1, 1)).toBe(1);
    expect((0, _clearBit2.default)(1, 2)).toBe(1);

    // 10 = 0b1010
    expect((0, _clearBit2.default)(10, 0)).toBe(10);
    expect((0, _clearBit2.default)(10, 1)).toBe(8);
    expect((0, _clearBit2.default)(10, 3)).toBe(2);
  });
});