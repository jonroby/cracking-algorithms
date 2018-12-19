'use strict';

var _radianToDegree = require('../radianToDegree');

var _radianToDegree2 = _interopRequireDefault(_radianToDegree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('radianToDegree', function () {
  it('should convert radian to degree', function () {
    expect((0, _radianToDegree2.default)(0)).toBe(0);
    expect((0, _radianToDegree2.default)(Math.PI / 4)).toBe(45);
    expect((0, _radianToDegree2.default)(Math.PI / 2)).toBe(90);
    expect((0, _radianToDegree2.default)(Math.PI)).toBe(180);
    expect((0, _radianToDegree2.default)(3 * Math.PI / 2)).toBe(270);
    expect((0, _radianToDegree2.default)(2 * Math.PI)).toBe(360);
  });
});