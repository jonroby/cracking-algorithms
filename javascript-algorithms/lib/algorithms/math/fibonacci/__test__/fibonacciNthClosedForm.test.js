'use strict';

var _fibonacciNthClosedForm = require('../fibonacciNthClosedForm');

var _fibonacciNthClosedForm2 = _interopRequireDefault(_fibonacciNthClosedForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fibonacciClosedForm', function () {
  it('should throw an error when trying to calculate fibonacci for not allowed positions', function () {
    var calculateFibonacciForNotAllowedPosition = function calculateFibonacciForNotAllowedPosition() {
      (0, _fibonacciNthClosedForm2.default)(76);
    };

    expect(calculateFibonacciForNotAllowedPosition).toThrow();
  });

  it('should calculate fibonacci correctly', function () {
    expect((0, _fibonacciNthClosedForm2.default)(1)).toBe(1);
    expect((0, _fibonacciNthClosedForm2.default)(2)).toBe(1);
    expect((0, _fibonacciNthClosedForm2.default)(3)).toBe(2);
    expect((0, _fibonacciNthClosedForm2.default)(4)).toBe(3);
    expect((0, _fibonacciNthClosedForm2.default)(5)).toBe(5);
    expect((0, _fibonacciNthClosedForm2.default)(6)).toBe(8);
    expect((0, _fibonacciNthClosedForm2.default)(7)).toBe(13);
    expect((0, _fibonacciNthClosedForm2.default)(8)).toBe(21);
    expect((0, _fibonacciNthClosedForm2.default)(20)).toBe(6765);
    expect((0, _fibonacciNthClosedForm2.default)(30)).toBe(832040);
    expect((0, _fibonacciNthClosedForm2.default)(50)).toBe(12586269025);
    expect((0, _fibonacciNthClosedForm2.default)(70)).toBe(190392490709135);
    expect((0, _fibonacciNthClosedForm2.default)(71)).toBe(308061521170129);
    expect((0, _fibonacciNthClosedForm2.default)(72)).toBe(498454011879264);
    expect((0, _fibonacciNthClosedForm2.default)(73)).toBe(806515533049393);
    expect((0, _fibonacciNthClosedForm2.default)(74)).toBe(1304969544928657);
    expect((0, _fibonacciNthClosedForm2.default)(75)).toBe(2111485077978050);
  });
});