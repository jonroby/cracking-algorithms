'use strict';

var _switchSign = require('../switchSign');

var _switchSign2 = _interopRequireDefault(_switchSign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('switchSign', function () {
  it('should switch the sign of the number using twos complement approach', function () {
    expect((0, _switchSign2.default)(0)).toBe(0);
    expect((0, _switchSign2.default)(1)).toBe(-1);
    expect((0, _switchSign2.default)(-1)).toBe(1);
    expect((0, _switchSign2.default)(32)).toBe(-32);
    expect((0, _switchSign2.default)(-32)).toBe(32);
    expect((0, _switchSign2.default)(23)).toBe(-23);
    expect((0, _switchSign2.default)(-23)).toBe(23);
  });
});