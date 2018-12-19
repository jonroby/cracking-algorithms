'use strict';

var _fastPowering = require('../fastPowering');

var _fastPowering2 = _interopRequireDefault(_fastPowering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fastPowering', function () {
  it('should compute power in log(n) time', function () {
    expect((0, _fastPowering2.default)(1, 1)).toBe(1);
    expect((0, _fastPowering2.default)(2, 0)).toBe(1);
    expect((0, _fastPowering2.default)(2, 2)).toBe(4);
    expect((0, _fastPowering2.default)(2, 3)).toBe(8);
    expect((0, _fastPowering2.default)(2, 4)).toBe(16);
    expect((0, _fastPowering2.default)(2, 5)).toBe(32);
    expect((0, _fastPowering2.default)(2, 6)).toBe(64);
    expect((0, _fastPowering2.default)(2, 7)).toBe(128);
    expect((0, _fastPowering2.default)(2, 8)).toBe(256);
    expect((0, _fastPowering2.default)(3, 4)).toBe(81);
    expect((0, _fastPowering2.default)(190, 2)).toBe(36100);
    expect((0, _fastPowering2.default)(11, 5)).toBe(161051);
    expect((0, _fastPowering2.default)(13, 11)).toBe(1792160394037);
    expect((0, _fastPowering2.default)(9, 16)).toBe(1853020188851841);
    expect((0, _fastPowering2.default)(16, 16)).toBe(18446744073709552000);
    expect((0, _fastPowering2.default)(7, 21)).toBe(558545864083284000);
    expect((0, _fastPowering2.default)(100, 9)).toBe(1000000000000000000);
  });
});