'use strict';

var _multiplyByTwo = require('../multiplyByTwo');

var _multiplyByTwo2 = _interopRequireDefault(_multiplyByTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('multiplyByTwo', function () {
  it('should multiply numbers by two using bitwise operations', function () {
    expect((0, _multiplyByTwo2.default)(0)).toBe(0);
    expect((0, _multiplyByTwo2.default)(1)).toBe(2);
    expect((0, _multiplyByTwo2.default)(3)).toBe(6);
    expect((0, _multiplyByTwo2.default)(10)).toBe(20);
    expect((0, _multiplyByTwo2.default)(17)).toBe(34);
    expect((0, _multiplyByTwo2.default)(125)).toBe(250);
  });
});