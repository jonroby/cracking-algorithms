'use strict';

var _divideByTwo = require('../divideByTwo');

var _divideByTwo2 = _interopRequireDefault(_divideByTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('divideByTwo', function () {
  it('should divide numbers by two using bitwise operations', function () {
    expect((0, _divideByTwo2.default)(0)).toBe(0);
    expect((0, _divideByTwo2.default)(1)).toBe(0);
    expect((0, _divideByTwo2.default)(3)).toBe(1);
    expect((0, _divideByTwo2.default)(10)).toBe(5);
    expect((0, _divideByTwo2.default)(17)).toBe(8);
    expect((0, _divideByTwo2.default)(125)).toBe(62);
  });
});