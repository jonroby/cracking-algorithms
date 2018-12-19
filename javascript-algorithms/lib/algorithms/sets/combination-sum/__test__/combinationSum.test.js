'use strict';

var _combinationSum = require('../combinationSum');

var _combinationSum2 = _interopRequireDefault(_combinationSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('combinationSum', function () {
  it('should find all combinations with specific sum', function () {
    expect((0, _combinationSum2.default)([1], 4)).toEqual([[1, 1, 1, 1]]);

    expect((0, _combinationSum2.default)([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);

    expect((0, _combinationSum2.default)([2, 3, 5], 8)).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);

    expect((0, _combinationSum2.default)([2, 5], 3)).toEqual([]);

    expect((0, _combinationSum2.default)([], 3)).toEqual([]);
  });
});