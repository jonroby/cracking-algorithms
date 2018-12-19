'use strict';

var _recursiveStaircaseBF = require('../recursiveStaircaseBF');

var _recursiveStaircaseBF2 = _interopRequireDefault(_recursiveStaircaseBF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('recursiveStaircaseBF', function () {
  it('should calculate number of variants using Brute Force solution', function () {
    expect((0, _recursiveStaircaseBF2.default)(-1)).toBe(0);
    expect((0, _recursiveStaircaseBF2.default)(0)).toBe(0);
    expect((0, _recursiveStaircaseBF2.default)(1)).toBe(1);
    expect((0, _recursiveStaircaseBF2.default)(2)).toBe(2);
    expect((0, _recursiveStaircaseBF2.default)(3)).toBe(3);
    expect((0, _recursiveStaircaseBF2.default)(4)).toBe(5);
    expect((0, _recursiveStaircaseBF2.default)(5)).toBe(8);
    expect((0, _recursiveStaircaseBF2.default)(6)).toBe(13);
    expect((0, _recursiveStaircaseBF2.default)(7)).toBe(21);
    expect((0, _recursiveStaircaseBF2.default)(8)).toBe(34);
    expect((0, _recursiveStaircaseBF2.default)(9)).toBe(55);
    expect((0, _recursiveStaircaseBF2.default)(10)).toBe(89);
  });
});