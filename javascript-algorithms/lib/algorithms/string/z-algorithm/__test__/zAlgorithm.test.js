'use strict';

var _zAlgorithm = require('../zAlgorithm');

var _zAlgorithm2 = _interopRequireDefault(_zAlgorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('zAlgorithm', function () {
  it('should find word positions in given text', function () {
    expect((0, _zAlgorithm2.default)('abcbcglx', 'abca')).toEqual([]);
    expect((0, _zAlgorithm2.default)('abca', 'abca')).toEqual([0]);
    expect((0, _zAlgorithm2.default)('abca', 'abcadfd')).toEqual([]);
    expect((0, _zAlgorithm2.default)('abcbcglabcx', 'abc')).toEqual([0, 7]);
    expect((0, _zAlgorithm2.default)('abcbcglx', 'bcgl')).toEqual([3]);
    expect((0, _zAlgorithm2.default)('abcbcglx', 'cglx')).toEqual([4]);
    expect((0, _zAlgorithm2.default)('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toEqual([15]);
    expect((0, _zAlgorithm2.default)('abcxabcdabxabcdabcdabcy', 'abcdabca')).toEqual([]);
    expect((0, _zAlgorithm2.default)('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toEqual([12]);
    expect((0, _zAlgorithm2.default)('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toEqual([11]);
  });
});