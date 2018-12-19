'use strict';

var _setBit = require('../setBit');

var _setBit2 = _interopRequireDefault(_setBit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setBit', function () {
  it('should set bit at specific position', function () {
    // 1 = 0b0001
    expect((0, _setBit2.default)(1, 0)).toBe(1);
    expect((0, _setBit2.default)(1, 1)).toBe(3);
    expect((0, _setBit2.default)(1, 2)).toBe(5);

    // 10 = 0b1010
    expect((0, _setBit2.default)(10, 0)).toBe(11);
    expect((0, _setBit2.default)(10, 1)).toBe(10);
    expect((0, _setBit2.default)(10, 2)).toBe(14);
  });
});