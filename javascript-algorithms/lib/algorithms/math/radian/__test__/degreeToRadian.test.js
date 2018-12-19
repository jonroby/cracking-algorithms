'use strict';

var _degreeToRadian = require('../degreeToRadian');

var _degreeToRadian2 = _interopRequireDefault(_degreeToRadian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('degreeToRadian', function () {
  it('should convert degree to radian', function () {
    expect((0, _degreeToRadian2.default)(0)).toBe(0);
    expect((0, _degreeToRadian2.default)(45)).toBe(Math.PI / 4);
    expect((0, _degreeToRadian2.default)(90)).toBe(Math.PI / 2);
    expect((0, _degreeToRadian2.default)(180)).toBe(Math.PI);
    expect((0, _degreeToRadian2.default)(270)).toBe(3 * Math.PI / 2);
    expect((0, _degreeToRadian2.default)(360)).toBe(2 * Math.PI);
  });
});