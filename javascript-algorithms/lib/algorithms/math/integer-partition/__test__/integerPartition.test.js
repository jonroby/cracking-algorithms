'use strict';

var _integerPartition = require('../integerPartition');

var _integerPartition2 = _interopRequireDefault(_integerPartition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('integerPartition', function () {
  it('should partition the number', function () {
    expect((0, _integerPartition2.default)(1)).toBe(1);
    expect((0, _integerPartition2.default)(2)).toBe(2);
    expect((0, _integerPartition2.default)(3)).toBe(3);
    expect((0, _integerPartition2.default)(4)).toBe(5);
    expect((0, _integerPartition2.default)(5)).toBe(7);
    expect((0, _integerPartition2.default)(6)).toBe(11);
    expect((0, _integerPartition2.default)(7)).toBe(15);
    expect((0, _integerPartition2.default)(8)).toBe(22);
  });
});