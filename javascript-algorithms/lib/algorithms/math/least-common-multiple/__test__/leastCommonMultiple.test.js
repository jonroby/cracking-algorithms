'use strict';

var _leastCommonMultiple = require('../leastCommonMultiple');

var _leastCommonMultiple2 = _interopRequireDefault(_leastCommonMultiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('leastCommonMultiple', function () {
  it('should find least common multiple', function () {
    expect((0, _leastCommonMultiple2.default)(0, 0)).toBe(0);
    expect((0, _leastCommonMultiple2.default)(1, 0)).toBe(0);
    expect((0, _leastCommonMultiple2.default)(0, 1)).toBe(0);
    expect((0, _leastCommonMultiple2.default)(4, 6)).toBe(12);
    expect((0, _leastCommonMultiple2.default)(6, 21)).toBe(42);
    expect((0, _leastCommonMultiple2.default)(7, 2)).toBe(14);
    expect((0, _leastCommonMultiple2.default)(3, 5)).toBe(15);
    expect((0, _leastCommonMultiple2.default)(7, 3)).toBe(21);
    expect((0, _leastCommonMultiple2.default)(1000000, 2)).toBe(1000000);
    expect((0, _leastCommonMultiple2.default)(-9, -18)).toBe(18);
    expect((0, _leastCommonMultiple2.default)(-7, -9)).toBe(63);
    expect((0, _leastCommonMultiple2.default)(-7, 9)).toBe(63);
  });
});