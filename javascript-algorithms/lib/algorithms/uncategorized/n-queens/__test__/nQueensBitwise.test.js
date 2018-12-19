'use strict';

var _nQueensBitwise = require('../nQueensBitwise');

var _nQueensBitwise2 = _interopRequireDefault(_nQueensBitwise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('nQueensBitwise', function () {
  it('should have solutions for 4 to N queens', function () {
    expect((0, _nQueensBitwise2.default)(4)).toBe(2);
    expect((0, _nQueensBitwise2.default)(5)).toBe(10);
    expect((0, _nQueensBitwise2.default)(6)).toBe(4);
    expect((0, _nQueensBitwise2.default)(7)).toBe(40);
    expect((0, _nQueensBitwise2.default)(8)).toBe(92);
    expect((0, _nQueensBitwise2.default)(9)).toBe(352);
    expect((0, _nQueensBitwise2.default)(10)).toBe(724);
    expect((0, _nQueensBitwise2.default)(11)).toBe(2680);
  });
});