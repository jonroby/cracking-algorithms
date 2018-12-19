'use strict';

var _factorial = require('../factorial');

var _factorial2 = _interopRequireDefault(_factorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('factorial', function () {
  it('should calculate factorial', function () {
    expect((0, _factorial2.default)(0)).toBe(1);
    expect((0, _factorial2.default)(1)).toBe(1);
    expect((0, _factorial2.default)(5)).toBe(120);
    expect((0, _factorial2.default)(8)).toBe(40320);
    expect((0, _factorial2.default)(10)).toBe(3628800);
  });
});