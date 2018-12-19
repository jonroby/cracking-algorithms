'use strict';

var _multiplyUnsigned = require('../multiplyUnsigned');

var _multiplyUnsigned2 = _interopRequireDefault(_multiplyUnsigned);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('multiplyUnsigned', function () {
  it('should multiply two unsigned numbers', function () {
    expect((0, _multiplyUnsigned2.default)(0, 2)).toBe(0);
    expect((0, _multiplyUnsigned2.default)(2, 0)).toBe(0);
    expect((0, _multiplyUnsigned2.default)(1, 1)).toBe(1);
    expect((0, _multiplyUnsigned2.default)(1, 2)).toBe(2);
    expect((0, _multiplyUnsigned2.default)(2, 7)).toBe(14);
    expect((0, _multiplyUnsigned2.default)(7, 2)).toBe(14);
    expect((0, _multiplyUnsigned2.default)(30, 2)).toBe(60);
    expect((0, _multiplyUnsigned2.default)(17, 34)).toBe(578);
    expect((0, _multiplyUnsigned2.default)(170, 2340)).toBe(397800);
  });
});