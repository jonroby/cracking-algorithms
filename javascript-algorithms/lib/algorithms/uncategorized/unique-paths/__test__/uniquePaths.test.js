'use strict';

var _uniquePaths = require('../uniquePaths');

var _uniquePaths2 = _interopRequireDefault(_uniquePaths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('uniquePaths', function () {
  it('should find the number of unique paths on board', function () {
    expect((0, _uniquePaths2.default)(3, 2)).toBe(3);
    expect((0, _uniquePaths2.default)(7, 3)).toBe(28);
    expect((0, _uniquePaths2.default)(3, 7)).toBe(28);
    expect((0, _uniquePaths2.default)(10, 10)).toBe(48620);
    expect((0, _uniquePaths2.default)(100, 1)).toBe(1);
    expect((0, _uniquePaths2.default)(1, 100)).toBe(1);
  });
});