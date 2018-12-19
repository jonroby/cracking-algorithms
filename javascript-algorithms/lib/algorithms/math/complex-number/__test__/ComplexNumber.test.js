'use strict';

var _ComplexNumber = require('../ComplexNumber');

var _ComplexNumber2 = _interopRequireDefault(_ComplexNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ComplexNumber', function () {
  it('should create complex numbers', function () {
    var complexNumber = new _ComplexNumber2.default({ re: 1, im: 2 });

    expect(complexNumber).toBeDefined();
    expect(complexNumber.re).toBe(1);
    expect(complexNumber.im).toBe(2);

    var defaultComplexNumber = new _ComplexNumber2.default();
    expect(defaultComplexNumber.re).toBe(0);
    expect(defaultComplexNumber.im).toBe(0);
  });

  it('should add complex numbers', function () {
    var complexNumber1 = new _ComplexNumber2.default({ re: 1, im: 2 });
    var complexNumber2 = new _ComplexNumber2.default({ re: 3, im: 8 });

    var complexNumber3 = complexNumber1.add(complexNumber2);
    var complexNumber4 = complexNumber2.add(complexNumber1);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2 + 8);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2 + 8);
  });

  it('should add complex and natural numbers', function () {
    var complexNumber = new _ComplexNumber2.default({ re: 1, im: 2 });
    var realNumber = new _ComplexNumber2.default({ re: 3 });

    var complexNumber3 = complexNumber.add(realNumber);
    var complexNumber4 = realNumber.add(complexNumber);
    var complexNumber5 = complexNumber.add(3);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2);

    expect(complexNumber5.re).toBe(1 + 3);
    expect(complexNumber5.im).toBe(2);
  });

  it('should subtract complex numbers', function () {
    var complexNumber1 = new _ComplexNumber2.default({ re: 1, im: 2 });
    var complexNumber2 = new _ComplexNumber2.default({ re: 3, im: 8 });

    var complexNumber3 = complexNumber1.subtract(complexNumber2);
    var complexNumber4 = complexNumber2.subtract(complexNumber1);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2 - 8);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(8 - 2);
  });

  it('should subtract complex and natural numbers', function () {
    var complexNumber = new _ComplexNumber2.default({ re: 1, im: 2 });
    var realNumber = new _ComplexNumber2.default({ re: 3 });

    var complexNumber3 = complexNumber.subtract(realNumber);
    var complexNumber4 = realNumber.subtract(complexNumber);
    var complexNumber5 = complexNumber.subtract(3);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(-2);

    expect(complexNumber5.re).toBe(1 - 3);
    expect(complexNumber5.im).toBe(2);
  });

  it('should multiply complex numbers', function () {
    var complexNumber1 = new _ComplexNumber2.default({ re: 3, im: 2 });
    var complexNumber2 = new _ComplexNumber2.default({ re: 1, im: 7 });

    var complexNumber3 = complexNumber1.multiply(complexNumber2);
    var complexNumber4 = complexNumber2.multiply(complexNumber1);
    var complexNumber5 = complexNumber1.multiply(5);

    expect(complexNumber3.re).toBe(-11);
    expect(complexNumber3.im).toBe(23);

    expect(complexNumber4.re).toBe(-11);
    expect(complexNumber4.im).toBe(23);

    expect(complexNumber5.re).toBe(15);
    expect(complexNumber5.im).toBe(10);
  });

  it('should multiply complex numbers by themselves', function () {
    var complexNumber = new _ComplexNumber2.default({ re: 1, im: 1 });

    var result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(0);
    expect(result.im).toBe(2);
  });

  it('should calculate i in power of two', function () {
    var complexNumber = new _ComplexNumber2.default({ re: 0, im: 1 });

    var result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(-1);
    expect(result.im).toBe(0);
  });

  it('should divide complex numbers', function () {
    var complexNumber1 = new _ComplexNumber2.default({ re: 2, im: 3 });
    var complexNumber2 = new _ComplexNumber2.default({ re: 4, im: -5 });

    var complexNumber3 = complexNumber1.divide(complexNumber2);
    var complexNumber4 = complexNumber1.divide(2);

    expect(complexNumber3.re).toBe(-7 / 41);
    expect(complexNumber3.im).toBe(22 / 41);

    expect(complexNumber4.re).toBe(1);
    expect(complexNumber4.im).toBe(1.5);
  });

  it('should return complex number in polar form', function () {
    var complexNumber1 = new _ComplexNumber2.default({ re: 3, im: 3 });
    expect(complexNumber1.getPolarForm().radius).toBe(Math.sqrt(Math.pow(3, 2) + Math.pow(3, 2)));
    expect(complexNumber1.getPolarForm().phase).toBe(Math.PI / 4);
    expect(complexNumber1.getPolarForm(false).phase).toBe(45);

    var complexNumber2 = new _ComplexNumber2.default({ re: -3, im: 3 });
    expect(complexNumber2.getPolarForm().radius).toBe(Math.sqrt(Math.pow(3, 2) + Math.pow(3, 2)));
    expect(complexNumber2.getPolarForm().phase).toBe(3 * (Math.PI / 4));
    expect(complexNumber2.getPolarForm(false).phase).toBe(135);

    var complexNumber3 = new _ComplexNumber2.default({ re: -3, im: -3 });
    expect(complexNumber3.getPolarForm().radius).toBe(Math.sqrt(Math.pow(3, 2) + Math.pow(3, 2)));
    expect(complexNumber3.getPolarForm().phase).toBe(-3 * (Math.PI / 4));
    expect(complexNumber3.getPolarForm(false).phase).toBe(-135);

    var complexNumber4 = new _ComplexNumber2.default({ re: 3, im: -3 });
    expect(complexNumber4.getPolarForm().radius).toBe(Math.sqrt(Math.pow(3, 2) + Math.pow(3, 2)));
    expect(complexNumber4.getPolarForm().phase).toBe(-1 * (Math.PI / 4));
    expect(complexNumber4.getPolarForm(false).phase).toBe(-45);

    var complexNumber5 = new _ComplexNumber2.default({ re: 5, im: 7 });
    expect(complexNumber5.getPolarForm().radius).toBeCloseTo(8.60);
    expect(complexNumber5.getPolarForm().phase).toBeCloseTo(0.95);
    expect(complexNumber5.getPolarForm(false).phase).toBeCloseTo(54.46);

    var complexNumber6 = new _ComplexNumber2.default({ re: 0, im: 0.25 });
    expect(complexNumber6.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber6.getPolarForm().phase).toBeCloseTo(1.57);
    expect(complexNumber6.getPolarForm(false).phase).toBeCloseTo(90);

    var complexNumber7 = new _ComplexNumber2.default({ re: 0, im: -0.25 });
    expect(complexNumber7.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber7.getPolarForm().phase).toBeCloseTo(-1.57);
    expect(complexNumber7.getPolarForm(false).phase).toBeCloseTo(-90);

    var complexNumber8 = new _ComplexNumber2.default();
    expect(complexNumber8.getPolarForm().radius).toBeCloseTo(0);
    expect(complexNumber8.getPolarForm().phase).toBeCloseTo(0);
    expect(complexNumber8.getPolarForm(false).phase).toBeCloseTo(0);

    var complexNumber9 = new _ComplexNumber2.default({ re: -0.25, im: 0 });
    expect(complexNumber9.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber9.getPolarForm().phase).toBeCloseTo(Math.PI);
    expect(complexNumber9.getPolarForm(false).phase).toBeCloseTo(180);

    var complexNumber10 = new _ComplexNumber2.default({ re: 0.25, im: 0 });
    expect(complexNumber10.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber10.getPolarForm().phase).toBeCloseTo(0);
    expect(complexNumber10.getPolarForm(false).phase).toBeCloseTo(0);
  });
});