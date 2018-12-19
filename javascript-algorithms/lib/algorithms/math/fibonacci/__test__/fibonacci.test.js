'use strict';

var _fibonacci = require('../fibonacci');

var _fibonacci2 = _interopRequireDefault(_fibonacci);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fibonacci', function () {
  it('should calculate fibonacci correctly', function () {
    expect((0, _fibonacci2.default)(1)).toEqual([1]);
    expect((0, _fibonacci2.default)(2)).toEqual([1, 1]);
    expect((0, _fibonacci2.default)(3)).toEqual([1, 1, 2]);
    expect((0, _fibonacci2.default)(4)).toEqual([1, 1, 2, 3]);
    expect((0, _fibonacci2.default)(5)).toEqual([1, 1, 2, 3, 5]);
    expect((0, _fibonacci2.default)(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect((0, _fibonacci2.default)(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect((0, _fibonacci2.default)(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    expect((0, _fibonacci2.default)(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect((0, _fibonacci2.default)(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});