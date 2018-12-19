'use strict';

var _bwPowerSet = require('../bwPowerSet');

var _bwPowerSet2 = _interopRequireDefault(_bwPowerSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bwPowerSet', function () {
  it('should calculate power set of given set using bitwise approach', function () {
    expect((0, _bwPowerSet2.default)([1])).toEqual([[], [1]]);

    expect((0, _bwPowerSet2.default)([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });
});