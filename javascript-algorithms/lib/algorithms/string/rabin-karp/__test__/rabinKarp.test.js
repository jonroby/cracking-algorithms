'use strict';

var _rabinKarp = require('../rabinKarp');

var _rabinKarp2 = _interopRequireDefault(_rabinKarp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('rabinKarp', function () {
  it('should find substring in a string', function () {
    expect((0, _rabinKarp2.default)('', '')).toBe(0);
    expect((0, _rabinKarp2.default)('a', '')).toBe(0);
    expect((0, _rabinKarp2.default)('a', 'a')).toBe(0);
    expect((0, _rabinKarp2.default)('ab', 'b')).toBe(1);
    expect((0, _rabinKarp2.default)('abcbcglx', 'abca')).toBe(-1);
    expect((0, _rabinKarp2.default)('abcbcglx', 'bcgl')).toBe(3);
    expect((0, _rabinKarp2.default)('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect((0, _rabinKarp2.default)('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect((0, _rabinKarp2.default)('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect((0, _rabinKarp2.default)('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
    expect((0, _rabinKarp2.default)('^ !/\'#\'pp', ' !/\'#\'pp')).toBe(1);
  });

  it('should work with bigger texts', function () {
    var text = 'Lorem Ipsum is simply dummy text of the printing and ' + 'typesetting industry. Lorem Ipsum has been the industry\'s standard ' + 'dummy text ever since the 1500s, when an unknown printer took a ' + 'galley of type and scrambled it to make a type specimen book. It ' + 'has survived not only five centuries, but also the leap into ' + 'electronic typesetting, remaining essentially unchanged. It was ' + 'popularised in the 1960s with the release of Letraset sheets ' + 'containing Lorem Ipsum passages, and more recently with desktop' + 'publishing software like Aldus PageMaker including versions of Lorem ' + 'Ipsum.';

    expect((0, _rabinKarp2.default)(text, 'Lorem')).toBe(0);
    expect((0, _rabinKarp2.default)(text, 'versions')).toBe(549);
    expect((0, _rabinKarp2.default)(text, 'versions of Lorem Ipsum.')).toBe(549);
    expect((0, _rabinKarp2.default)(text, 'versions of Lorem Ipsum:')).toBe(-1);
    expect((0, _rabinKarp2.default)(text, 'Lorem Ipsum passages, and more recently with')).toBe(446);
  });

  it('should work with UTF symbols', function () {
    expect((0, _rabinKarp2.default)('a\uFFFF', '\uFFFF')).toBe(1);
    expect((0, _rabinKarp2.default)('\0\u8000\0', '\u8000\0')).toBe(1);
    // @TODO: Provide Unicode support.
    // expect(rabinKarp('a\u{20000}', '\u{20000}')).toBe(1);
  });
});