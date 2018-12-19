'use strict';

var _multiply = require('../multiply');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('multiply', function () {
  it('should multiply two numbers', function () {
    expect((0, _multiply2.default)(0, 0)).toBe(0);
    expect((0, _multiply2.default)(2, 0)).toBe(0);
    expect((0, _multiply2.default)(0, 2)).toBe(0);
    expect((0, _multiply2.default)(1, 2)).toBe(2);
    expect((0, _multiply2.default)(2, 1)).toBe(2);
    expect((0, _multiply2.default)(6, 6)).toBe(36);
    expect((0, _multiply2.default)(-2, 4)).toBe(-8);
    expect((0, _multiply2.default)(4, -2)).toBe(-8);
    expect((0, _multiply2.default)(-4, -4)).toBe(16);
    expect((0, _multiply2.default)(4, -5)).toBe(-20);
    expect((0, _multiply2.default)(2, 121)).toBe(242);
    expect((0, _multiply2.default)(121, 2)).toBe(242);
  });
});