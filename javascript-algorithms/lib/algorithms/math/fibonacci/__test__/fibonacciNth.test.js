'use strict';

var _fibonacciNth = require('../fibonacciNth');

var _fibonacciNth2 = _interopRequireDefault(_fibonacciNth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fibonacciNth', function () {
  it('should calculate fibonacci correctly', function () {
    expect((0, _fibonacciNth2.default)(1)).toBe(1);
    expect((0, _fibonacciNth2.default)(2)).toBe(1);
    expect((0, _fibonacciNth2.default)(3)).toBe(2);
    expect((0, _fibonacciNth2.default)(4)).toBe(3);
    expect((0, _fibonacciNth2.default)(5)).toBe(5);
    expect((0, _fibonacciNth2.default)(6)).toBe(8);
    expect((0, _fibonacciNth2.default)(7)).toBe(13);
    expect((0, _fibonacciNth2.default)(8)).toBe(21);
    expect((0, _fibonacciNth2.default)(20)).toBe(6765);
    expect((0, _fibonacciNth2.default)(30)).toBe(832040);
    expect((0, _fibonacciNth2.default)(50)).toBe(12586269025);
    expect((0, _fibonacciNth2.default)(70)).toBe(190392490709135);
    expect((0, _fibonacciNth2.default)(71)).toBe(308061521170129);
    expect((0, _fibonacciNth2.default)(72)).toBe(498454011879264);
    expect((0, _fibonacciNth2.default)(73)).toBe(806515533049393);
    expect((0, _fibonacciNth2.default)(74)).toBe(1304969544928657);
    expect((0, _fibonacciNth2.default)(75)).toBe(2111485077978050);
    expect((0, _fibonacciNth2.default)(80)).toBe(23416728348467685);
    expect((0, _fibonacciNth2.default)(90)).toBe(2880067194370816120);
  });
});