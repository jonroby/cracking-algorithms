'use strict';

var _discreteFourierTransform = require('../discreteFourierTransform');

var _discreteFourierTransform2 = _interopRequireDefault(_discreteFourierTransform);

var _FourierTester = require('./FourierTester');

var _FourierTester2 = _interopRequireDefault(_FourierTester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('discreteFourierTransform', function () {
  it('should split signal into frequencies', function () {
    _FourierTester2.default.testDirectFourierTransform(_discreteFourierTransform2.default);
  });
});