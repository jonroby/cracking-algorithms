'use strict';

var _euclideanAlgorithm = require('../euclideanAlgorithm');

var _euclideanAlgorithm2 = _interopRequireDefault(_euclideanAlgorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('euclideanAlgorithm', function () {
  it('should calculate GCD recursively', function () {
    expect((0, _euclideanAlgorithm2.default)(0, 0)).toBe(0);
    expect((0, _euclideanAlgorithm2.default)(2, 0)).toBe(2);
    expect((0, _euclideanAlgorithm2.default)(0, 2)).toBe(2);
    expect((0, _euclideanAlgorithm2.default)(1, 2)).toBe(1);
    expect((0, _euclideanAlgorithm2.default)(2, 1)).toBe(1);
    expect((0, _euclideanAlgorithm2.default)(6, 6)).toBe(6);
    expect((0, _euclideanAlgorithm2.default)(2, 4)).toBe(2);
    expect((0, _euclideanAlgorithm2.default)(4, 2)).toBe(2);
    expect((0, _euclideanAlgorithm2.default)(12, 4)).toBe(4);
    expect((0, _euclideanAlgorithm2.default)(4, 12)).toBe(4);
    expect((0, _euclideanAlgorithm2.default)(5, 13)).toBe(1);
    expect((0, _euclideanAlgorithm2.default)(27, 13)).toBe(1);
    expect((0, _euclideanAlgorithm2.default)(24, 60)).toBe(12);
    expect((0, _euclideanAlgorithm2.default)(60, 24)).toBe(12);
    expect((0, _euclideanAlgorithm2.default)(252, 105)).toBe(21);
    expect((0, _euclideanAlgorithm2.default)(105, 252)).toBe(21);
    expect((0, _euclideanAlgorithm2.default)(1071, 462)).toBe(21);
    expect((0, _euclideanAlgorithm2.default)(462, 1071)).toBe(21);
    expect((0, _euclideanAlgorithm2.default)(462, -1071)).toBe(21);
    expect((0, _euclideanAlgorithm2.default)(-462, -1071)).toBe(21);
  });
});