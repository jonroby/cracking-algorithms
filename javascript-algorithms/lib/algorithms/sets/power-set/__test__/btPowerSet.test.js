'use strict';

var _btPowerSet = require('../btPowerSet');

var _btPowerSet2 = _interopRequireDefault(_btPowerSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('btPowerSet', function () {
  it('should calculate power set of given set using backtracking approach', function () {
    expect((0, _btPowerSet2.default)([1])).toEqual([[], [1]]);

    expect((0, _btPowerSet2.default)([1, 2, 3])).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
  });
});