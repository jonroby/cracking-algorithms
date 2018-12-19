'use strict';

var _getBit = require('../getBit');

var _getBit2 = _interopRequireDefault(_getBit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getBit', function () {
  it('should get bit at specific position', function () {
    // 1 = 0b0001
    expect((0, _getBit2.default)(1, 0)).toBe(1);
    expect((0, _getBit2.default)(1, 1)).toBe(0);

    // 2 = 0b0010
    expect((0, _getBit2.default)(2, 0)).toBe(0);
    expect((0, _getBit2.default)(2, 1)).toBe(1);

    // 3 = 0b0011
    expect((0, _getBit2.default)(3, 0)).toBe(1);
    expect((0, _getBit2.default)(3, 1)).toBe(1);

    // 10 = 0b1010
    expect((0, _getBit2.default)(10, 0)).toBe(0);
    expect((0, _getBit2.default)(10, 1)).toBe(1);
    expect((0, _getBit2.default)(10, 2)).toBe(0);
    expect((0, _getBit2.default)(10, 3)).toBe(1);
  });
});