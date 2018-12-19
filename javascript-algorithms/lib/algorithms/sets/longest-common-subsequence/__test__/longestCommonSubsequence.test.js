'use strict';

var _longestCommonSubsequence = require('../longestCommonSubsequence');

var _longestCommonSubsequence2 = _interopRequireDefault(_longestCommonSubsequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('longestCommonSubsequence', function () {
  it('should find longest common subsequence for two strings', function () {
    expect((0, _longestCommonSubsequence2.default)([''], [''])).toEqual(['']);

    expect((0, _longestCommonSubsequence2.default)([''], ['A', 'B', 'C'])).toEqual(['']);

    expect((0, _longestCommonSubsequence2.default)(['A', 'B', 'C'], [''])).toEqual(['']);

    expect((0, _longestCommonSubsequence2.default)(['A', 'B', 'C'], ['D', 'E', 'F', 'G'])).toEqual(['']);

    expect((0, _longestCommonSubsequence2.default)(['A', 'B', 'C', 'D', 'G', 'H'], ['A', 'E', 'D', 'F', 'H', 'R'])).toEqual(['A', 'D', 'H']);

    expect((0, _longestCommonSubsequence2.default)(['A', 'G', 'G', 'T', 'A', 'B'], ['G', 'X', 'T', 'X', 'A', 'Y', 'B'])).toEqual(['G', 'T', 'A', 'B']);

    expect((0, _longestCommonSubsequence2.default)(['A', 'B', 'C', 'D', 'A', 'F'], ['A', 'C', 'B', 'C', 'F'])).toEqual(['A', 'B', 'C', 'F']);
  });
});