'use strict';

var _bfRainTerraces = require('../bfRainTerraces');

var _bfRainTerraces2 = _interopRequireDefault(_bfRainTerraces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bfRainTerraces', function () {
  it('should find the amount of water collected after raining', function () {
    expect((0, _bfRainTerraces2.default)([1])).toBe(0);
    expect((0, _bfRainTerraces2.default)([1, 0])).toBe(0);
    expect((0, _bfRainTerraces2.default)([0, 1])).toBe(0);
    expect((0, _bfRainTerraces2.default)([0, 1, 0])).toBe(0);
    expect((0, _bfRainTerraces2.default)([0, 1, 0, 0])).toBe(0);
    expect((0, _bfRainTerraces2.default)([0, 1, 0, 0, 1, 0])).toBe(2);
    expect((0, _bfRainTerraces2.default)([0, 2, 0, 0, 1, 0])).toBe(2);
    expect((0, _bfRainTerraces2.default)([2, 0, 2])).toBe(2);
    expect((0, _bfRainTerraces2.default)([2, 0, 5])).toBe(2);
    expect((0, _bfRainTerraces2.default)([3, 0, 0, 2, 0, 4])).toBe(10);
    expect((0, _bfRainTerraces2.default)([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect((0, _bfRainTerraces2.default)([1, 1, 1, 1, 1])).toBe(0);
    expect((0, _bfRainTerraces2.default)([1, 2, 3, 4, 5])).toBe(0);
    expect((0, _bfRainTerraces2.default)([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
    expect((0, _bfRainTerraces2.default)([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
  });
});