'use strict';

var _dpMaximumSubarray = require('../dpMaximumSubarray');

var _dpMaximumSubarray2 = _interopRequireDefault(_dpMaximumSubarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dpMaximumSubarray', function () {
  it('should find maximum subarray using dynamic programming algorithm', function () {
    expect((0, _dpMaximumSubarray2.default)([])).toEqual([]);
    expect((0, _dpMaximumSubarray2.default)([0, 0])).toEqual([0]);
    expect((0, _dpMaximumSubarray2.default)([0, 0, 1])).toEqual([0, 0, 1]);
    expect((0, _dpMaximumSubarray2.default)([0, 0, 1, 2])).toEqual([0, 0, 1, 2]);
    expect((0, _dpMaximumSubarray2.default)([0, 0, -1, 2])).toEqual([2]);
    expect((0, _dpMaximumSubarray2.default)([-1, -2, -3, -4, -5])).toEqual([-1]);
    expect((0, _dpMaximumSubarray2.default)([1, 2, 3, 2, 3, 4, 5])).toEqual([1, 2, 3, 2, 3, 4, 5]);
    expect((0, _dpMaximumSubarray2.default)([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    expect((0, _dpMaximumSubarray2.default)([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    expect((0, _dpMaximumSubarray2.default)([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual([7, 6, -1, 4, 11]);
  });
});