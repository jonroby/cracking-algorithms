'use strict';

var _dpTopDownJumpGame = require('../dpTopDownJumpGame');

var _dpTopDownJumpGame2 = _interopRequireDefault(_dpTopDownJumpGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dpTopDownJumpGame', function () {
  it('should solve Jump Game problem in top-down dynamic programming manner', function () {
    expect((0, _dpTopDownJumpGame2.default)([1, 0])).toBe(true);
    expect((0, _dpTopDownJumpGame2.default)([100, 0])).toBe(true);
    expect((0, _dpTopDownJumpGame2.default)([2, 3, 1, 1, 4])).toBe(true);
    expect((0, _dpTopDownJumpGame2.default)([1, 1, 1, 1, 1])).toBe(true);
    expect((0, _dpTopDownJumpGame2.default)([1, 1, 1, 10, 1])).toBe(true);
    expect((0, _dpTopDownJumpGame2.default)([1, 5, 2, 1, 0, 2, 0])).toBe(true);

    expect((0, _dpTopDownJumpGame2.default)([1, 0, 1])).toBe(false);
    expect((0, _dpTopDownJumpGame2.default)([3, 2, 1, 0, 4])).toBe(false);
    expect((0, _dpTopDownJumpGame2.default)([0, 0, 0, 0, 0])).toBe(false);
    expect((0, _dpTopDownJumpGame2.default)([5, 4, 3, 2, 1, 0, 0])).toBe(false);
  });
});