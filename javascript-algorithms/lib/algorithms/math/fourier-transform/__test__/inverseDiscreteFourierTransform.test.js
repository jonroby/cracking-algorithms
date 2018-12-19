'use strict';

var _inverseDiscreteFourierTransform = require('../inverseDiscreteFourierTransform');

var _inverseDiscreteFourierTransform2 = _interopRequireDefault(_inverseDiscreteFourierTransform);

var _FourierTester = require('./FourierTester');

var _FourierTester2 = _interopRequireDefault(_FourierTester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('inverseDiscreteFourierTransform', function () {
  it('should calculate output signal out of input frequencies', function () {
    _FourierTester2.default.testInverseFourierTransform(_inverseDiscreteFourierTransform2.default);
  });
});