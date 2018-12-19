'use strict';

var _dpBottomUpJumpGame = require('../dpBottomUpJumpGame');

var _dpBottomUpJumpGame2 = _interopRequireDefault(_dpBottomUpJumpGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dpBottomUpJumpGame', function () {
  it('should solve Jump Game problem in bottom-up dynamic programming manner', function () {
    expect((0, _dpBottomUpJumpGame2.default)([1, 0])).toBe(true);
    expect((0, _dpBottomUpJumpGame2.default)([100, 0])).toBe(true);
    expect((0, _dpBottomUpJumpGame2.default)([2, 3, 1, 1, 4])).toBe(true);
    expect((0, _dpBottomUpJumpGame2.default)([1, 1, 1, 1, 1])).toBe(true);
    expect((0, _dpBottomUpJumpGame2.default)([1, 1, 1, 10, 1])).toBe(true);
    expect((0, _dpBottomUpJumpGame2.default)([1, 5, 2, 1, 0, 2, 0])).toBe(true);

    expect((0, _dpBottomUpJumpGame2.default)([1, 0, 1])).toBe(false);
    expect((0, _dpBottomUpJumpGame2.default)([3, 2, 1, 0, 4])).toBe(false);
    expect((0, _dpBottomUpJumpGame2.default)([0, 0, 0, 0, 0])).toBe(false);
    expect((0, _dpBottomUpJumpGame2.default)([5, 4, 3, 2, 1, 0, 0])).toBe(false);
  });
});