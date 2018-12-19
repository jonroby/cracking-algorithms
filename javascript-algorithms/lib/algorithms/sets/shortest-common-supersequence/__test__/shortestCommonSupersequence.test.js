'use strict';

var _shortestCommonSupersequence = require('../shortestCommonSupersequence');

var _shortestCommonSupersequence2 = _interopRequireDefault(_shortestCommonSupersequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('shortestCommonSupersequence', function () {
  it('should find shortest common supersequence of two sequences', function () {
    // LCS (longest common subsequence) is empty
    expect((0, _shortestCommonSupersequence2.default)(['A', 'B', 'C'], ['D', 'E', 'F'])).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);

    // LCS (longest common subsequence) is "EE"
    expect((0, _shortestCommonSupersequence2.default)(['G', 'E', 'E', 'K'], ['E', 'K', 'E'])).toEqual(['G', 'E', 'K', 'E', 'K']);

    // LCS (longest common subsequence) is "GTAB"
    expect((0, _shortestCommonSupersequence2.default)(['A', 'G', 'G', 'T', 'A', 'B'], ['G', 'X', 'T', 'X', 'A', 'Y', 'B'])).toEqual(['A', 'G', 'G', 'X', 'T', 'X', 'A', 'Y', 'B']);

    // LCS (longest common subsequence) is "BCBA".
    expect((0, _shortestCommonSupersequence2.default)(['A', 'B', 'C', 'B', 'D', 'A', 'B'], ['B', 'D', 'C', 'A', 'B', 'A'])).toEqual(['A', 'B', 'D', 'C', 'A', 'B', 'D', 'A', 'B']);

    // LCS (longest common subsequence) is "BDABA".
    expect((0, _shortestCommonSupersequence2.default)(['B', 'D', 'C', 'A', 'B', 'A'], ['A', 'B', 'C', 'B', 'D', 'A', 'B', 'A', 'C'])).toEqual(['A', 'B', 'C', 'B', 'D', 'C', 'A', 'B', 'A', 'C']);
  });
});