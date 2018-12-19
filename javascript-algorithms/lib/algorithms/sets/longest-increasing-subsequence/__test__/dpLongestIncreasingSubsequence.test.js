'use strict';

var _dpLongestIncreasingSubsequence = require('../dpLongestIncreasingSubsequence');

var _dpLongestIncreasingSubsequence2 = _interopRequireDefault(_dpLongestIncreasingSubsequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dpLongestIncreasingSubsequence', function () {
  it('should find longest increasing subsequence length', function () {
    // Should be:
    // 9 or
    // 8 or
    // 7 or
    // 6 or
    // ...
    expect((0, _dpLongestIncreasingSubsequence2.default)([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(1);

    // Should be:
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    expect((0, _dpLongestIncreasingSubsequence2.default)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(10);

    // Should be:
    // -1, 0, 2, 3
    expect((0, _dpLongestIncreasingSubsequence2.default)([3, 4, -1, 0, 6, 2, 3])).toBe(4);

    // Should be:
    // 0, 2, 6, 9, 11, 15 or
    // 0, 4, 6, 9, 11, 15 or
    // 0, 2, 6, 9, 13, 15 or
    // 0, 4, 6, 9, 13, 15
    expect((0, _dpLongestIncreasingSubsequence2.default)([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])).toBe(6);
  });
});