'use strict';

var _squareMatrixRotation = require('../squareMatrixRotation');

var _squareMatrixRotation2 = _interopRequireDefault(_squareMatrixRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('squareMatrixRotation', function () {
  it('should rotate matrix #0 in-place', function () {
    var matrix = [[1]];

    var rotatedMatrix = [[1]];

    expect((0, _squareMatrixRotation2.default)(matrix)).toEqual(rotatedMatrix);
  });

  it('should rotate matrix #1 in-place', function () {
    var matrix = [[1, 2], [3, 4]];

    var rotatedMatrix = [[3, 1], [4, 2]];

    expect((0, _squareMatrixRotation2.default)(matrix)).toEqual(rotatedMatrix);
  });

  it('should rotate matrix #2 in-place', function () {
    var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    var rotatedMatrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

    expect((0, _squareMatrixRotation2.default)(matrix)).toEqual(rotatedMatrix);
  });

  it('should rotate matrix #3 in-place', function () {
    var matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

    var rotatedMatrix = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];

    expect((0, _squareMatrixRotation2.default)(matrix)).toEqual(rotatedMatrix);
  });
});