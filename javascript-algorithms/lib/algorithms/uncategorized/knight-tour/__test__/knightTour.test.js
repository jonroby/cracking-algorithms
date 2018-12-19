'use strict';

var _knightTour = require('../knightTour');

var _knightTour2 = _interopRequireDefault(_knightTour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('knightTour', function () {
  it('should not find solution on 3x3 board', function () {
    var moves = (0, _knightTour2.default)(3);

    expect(moves.length).toBe(0);
  });

  it('should find one solution to do knight tour on 5x5 board', function () {
    var moves = (0, _knightTour2.default)(5);

    expect(moves.length).toBe(25);

    expect(moves).toEqual([[0, 0], [1, 2], [2, 0], [0, 1], [1, 3], [3, 4], [2, 2], [4, 1], [3, 3], [1, 4], [0, 2], [1, 0], [3, 1], [4, 3], [2, 4], [0, 3], [1, 1], [3, 0], [4, 2], [2, 1], [4, 0], [3, 2], [4, 4], [2, 3], [0, 4]]);
  });
});