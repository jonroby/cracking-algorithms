'use strict';

var _QueenPosition = require('../QueenPosition');

var _QueenPosition2 = _interopRequireDefault(_QueenPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('QueenPosition', function () {
  it('should store queen position on chessboard', function () {
    var position1 = new _QueenPosition2.default(0, 0);
    var position2 = new _QueenPosition2.default(2, 1);

    expect(position2.columnIndex).toBe(1);
    expect(position2.rowIndex).toBe(2);
    expect(position1.leftDiagonal).toBe(0);
    expect(position1.rightDiagonal).toBe(0);
    expect(position2.leftDiagonal).toBe(1);
    expect(position2.rightDiagonal).toBe(3);
    expect(position2.toString()).toBe('2,1');
  });
});