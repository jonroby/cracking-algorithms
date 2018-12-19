'use strict';

var _updateBit = require('../updateBit');

var _updateBit2 = _interopRequireDefault(_updateBit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('updateBit', function () {
  it('should update bit at specific position', function () {
    // 1 = 0b0001
    expect((0, _updateBit2.default)(1, 0, 1)).toBe(1);
    expect((0, _updateBit2.default)(1, 0, 0)).toBe(0);
    expect((0, _updateBit2.default)(1, 1, 1)).toBe(3);
    expect((0, _updateBit2.default)(1, 2, 1)).toBe(5);

    // 10 = 0b1010
    expect((0, _updateBit2.default)(10, 0, 1)).toBe(11);
    expect((0, _updateBit2.default)(10, 0, 0)).toBe(10);
    expect((0, _updateBit2.default)(10, 1, 1)).toBe(10);
    expect((0, _updateBit2.default)(10, 1, 0)).toBe(8);
    expect((0, _updateBit2.default)(10, 2, 1)).toBe(14);
    expect((0, _updateBit2.default)(10, 2, 0)).toBe(10);
  });
});