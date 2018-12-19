'use strict';

var _knuthMorrisPratt = require('../knuthMorrisPratt');

var _knuthMorrisPratt2 = _interopRequireDefault(_knuthMorrisPratt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('knuthMorrisPratt', function () {
  it('should find word position in given text', function () {
    expect((0, _knuthMorrisPratt2.default)('', '')).toBe(0);
    expect((0, _knuthMorrisPratt2.default)('a', '')).toBe(0);
    expect((0, _knuthMorrisPratt2.default)('a', 'a')).toBe(0);
    expect((0, _knuthMorrisPratt2.default)('abcbcglx', 'abca')).toBe(-1);
    expect((0, _knuthMorrisPratt2.default)('abcbcglx', 'bcgl')).toBe(3);
    expect((0, _knuthMorrisPratt2.default)('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect((0, _knuthMorrisPratt2.default)('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect((0, _knuthMorrisPratt2.default)('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect((0, _knuthMorrisPratt2.default)('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
  });
});