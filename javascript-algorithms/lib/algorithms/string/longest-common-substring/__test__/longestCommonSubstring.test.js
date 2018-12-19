'use strict';

var _longestCommonSubstring = require('../longestCommonSubstring');

var _longestCommonSubstring2 = _interopRequireDefault(_longestCommonSubstring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('longestCommonSubstring', function () {
  it('should find longest common substring between two strings', function () {
    expect((0, _longestCommonSubstring2.default)('', '')).toBe('');
    expect((0, _longestCommonSubstring2.default)('ABC', '')).toBe('');
    expect((0, _longestCommonSubstring2.default)('', 'ABC')).toBe('');
    expect((0, _longestCommonSubstring2.default)('ABABC', 'BABCA')).toBe('BABC');
    expect((0, _longestCommonSubstring2.default)('BABCA', 'ABCBA')).toBe('ABC');
    expect((0, _longestCommonSubstring2.default)('Algorithms and data structures implemented in JavaScript', 'Here you may find Algorithms and data structures that are implemented in JavaScript')).toBe('Algorithms and data structures ');
  });

  it('should handle unicode correctly', function () {
    expect((0, _longestCommonSubstring2.default)('𐌵𐌵**ABC', '𐌵𐌵--ABC')).toBe('ABC');
    expect((0, _longestCommonSubstring2.default)('𐌵𐌵**A', '𐌵𐌵--A')).toBe('𐌵𐌵');
    expect((0, _longestCommonSubstring2.default)('A买B时', '买B时GD')).toBe('买B时');
    expect((0, _longestCommonSubstring2.default)('After test买时 case', 'another_test买时')).toBe('test买时');
  });
});