'use strict';

var _levenshteinDistance = require('../levenshteinDistance');

var _levenshteinDistance2 = _interopRequireDefault(_levenshteinDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('levenshteinDistance', function () {
  it('should calculate edit distance between two strings', function () {
    expect((0, _levenshteinDistance2.default)('', '')).toBe(0);
    expect((0, _levenshteinDistance2.default)('a', '')).toBe(1);
    expect((0, _levenshteinDistance2.default)('', 'a')).toBe(1);
    expect((0, _levenshteinDistance2.default)('abc', '')).toBe(3);
    expect((0, _levenshteinDistance2.default)('', 'abc')).toBe(3);

    // Should just add I to the beginning.
    expect((0, _levenshteinDistance2.default)('islander', 'slander')).toBe(1);

    // Needs to substitute M by K, T by M and add an A to the end
    expect((0, _levenshteinDistance2.default)('mart', 'karma')).toBe(3);

    // Substitute K by S, E by I and insert G at the end.
    expect((0, _levenshteinDistance2.default)('kitten', 'sitting')).toBe(3);

    // Should add 4 letters FOOT at the beginning.
    expect((0, _levenshteinDistance2.default)('ball', 'football')).toBe(4);

    // Should delete 4 letters FOOT at the beginning.
    expect((0, _levenshteinDistance2.default)('football', 'foot')).toBe(4);

    // Needs to substitute the first 5 chars: INTEN by EXECU
    expect((0, _levenshteinDistance2.default)('intention', 'execution')).toBe(5);
  });
});