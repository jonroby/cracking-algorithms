'use strict';

var _btUniquePaths = require('../btUniquePaths');

var _btUniquePaths2 = _interopRequireDefault(_btUniquePaths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('btUniquePaths', function () {
  it('should find the number of unique paths on board', function () {
    expect((0, _btUniquePaths2.default)(3, 2)).toBe(3);
    expect((0, _btUniquePaths2.default)(7, 3)).toBe(28);
    expect((0, _btUniquePaths2.default)(3, 7)).toBe(28);
    expect((0, _btUniquePaths2.default)(10, 10)).toBe(48620);
    expect((0, _btUniquePaths2.default)(100, 1)).toBe(1);
    expect((0, _btUniquePaths2.default)(1, 100)).toBe(1);
  });
});