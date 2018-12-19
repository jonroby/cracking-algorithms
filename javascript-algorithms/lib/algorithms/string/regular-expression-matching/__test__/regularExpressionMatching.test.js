'use strict';

var _regularExpressionMatching = require('../regularExpressionMatching');

var _regularExpressionMatching2 = _interopRequireDefault(_regularExpressionMatching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('regularExpressionMatching', function () {
  it('should match regular expressions in a string', function () {
    expect((0, _regularExpressionMatching2.default)('', '')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('a', 'a')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aa', 'aa')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aab', 'aab')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aab', 'aa.')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aab', '.a.')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aab', '...')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('a', 'a*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aaa', 'a*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aaab', 'a*b')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aaabb', 'a*b*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aaabb', 'a*b*c*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('', 'a*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('xaabyc', 'xa*b.c')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('aab', 'c*a*b*')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('mississippi', 'mis*is*.p*.')).toBe(true);
    expect((0, _regularExpressionMatching2.default)('ab', '.*')).toBe(true);

    expect((0, _regularExpressionMatching2.default)('', 'a')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('a', '')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('aab', 'aa')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('aab', 'baa')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('aabc', '...')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('aaabbdd', 'a*b*c*')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('mississippi', 'mis*is*p*.')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('ab', 'a*')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('abba', 'a*b*.c')).toBe(false);
    expect((0, _regularExpressionMatching2.default)('abba', '.*c')).toBe(false);
  });
});