'use strict';

var _bitsDiff = require('../bitsDiff');

var _bitsDiff2 = _interopRequireDefault(_bitsDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bitsDiff', function () {
  it('should calculate bits difference between two numbers', function () {
    expect((0, _bitsDiff2.default)(0, 0)).toBe(0);
    expect((0, _bitsDiff2.default)(1, 1)).toBe(0);
    expect((0, _bitsDiff2.default)(124, 124)).toBe(0);
    expect((0, _bitsDiff2.default)(0, 1)).toBe(1);
    expect((0, _bitsDiff2.default)(1, 0)).toBe(1);
    expect((0, _bitsDiff2.default)(1, 2)).toBe(2);
    expect((0, _bitsDiff2.default)(1, 3)).toBe(1);
  });
});