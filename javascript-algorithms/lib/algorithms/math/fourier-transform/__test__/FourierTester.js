'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fourierTestCases = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComplexNumber = require('../../complex-number/ComplexNumber');

var _ComplexNumber2 = _interopRequireDefault(_ComplexNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fourierTestCases = exports.fourierTestCases = [{
  input: [{ amplitude: 1 }],
  output: [{
    frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0
  }]
}, {
  input: [{ amplitude: 1 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 0.5, phase: 0, re: 0.5, im: 0
  }, {
    frequency: 1, amplitude: 0.5, phase: 0, re: 0.5, im: 0
  }]
}, {
  input: [{ amplitude: 2 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0
  }, {
    frequency: 1, amplitude: 1, phase: 0, re: 1, im: 0
  }]
}, {
  input: [{ amplitude: 1 }, { amplitude: 0 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 0.33333, phase: 0, re: 0.33333, im: 0
  }, {
    frequency: 1, amplitude: 0.33333, phase: 0, re: 0.33333, im: 0
  }, {
    frequency: 2, amplitude: 0.33333, phase: 0, re: 0.33333, im: 0
  }]
}, {
  input: [{ amplitude: 1 }, { amplitude: 0 }, { amplitude: 0 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 1, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 3, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }]
}, {
  input: [{ amplitude: 0 }, { amplitude: 1 }, { amplitude: 0 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 1, amplitude: 0.25, phase: -90, re: 0, im: -0.25
  }, {
    frequency: 2, amplitude: 0.25, phase: 180, re: -0.25, im: 0
  }, {
    frequency: 3, amplitude: 0.25, phase: 90, re: 0, im: 0.25
  }]
}, {
  input: [{ amplitude: 0 }, { amplitude: 0 }, { amplitude: 1 }, { amplitude: 0 }],
  output: [{
    frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 1, amplitude: 0.25, phase: 180, re: -0.25, im: 0
  }, {
    frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 3, amplitude: 0.25, phase: 180, re: -0.25, im: 0
  }]
}, {
  input: [{ amplitude: 0 }, { amplitude: 0 }, { amplitude: 0 }, { amplitude: 2 }],
  output: [{
    frequency: 0, amplitude: 0.5, phase: 0, re: 0.5, im: 0
  }, {
    frequency: 1, amplitude: 0.5, phase: 90, re: 0, im: 0.5
  }, {
    frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0
  }, {
    frequency: 3, amplitude: 0.5, phase: -90, re: 0, im: -0.5
  }]
}, {
  input: [{ amplitude: 0 }, { amplitude: 1 }, { amplitude: 0 }, { amplitude: 2 }],
  output: [{
    frequency: 0, amplitude: 0.75, phase: 0, re: 0.75, im: 0
  }, {
    frequency: 1, amplitude: 0.25, phase: 90, re: 0, im: 0.25
  }, {
    frequency: 2, amplitude: 0.75, phase: 180, re: -0.75, im: 0
  }, {
    frequency: 3, amplitude: 0.25, phase: -90, re: 0, im: -0.25
  }]
}, {
  input: [{ amplitude: 4 }, { amplitude: 1 }, { amplitude: 0 }, { amplitude: 2 }],
  output: [{
    frequency: 0, amplitude: 1.75, phase: 0, re: 1.75, im: 0
  }, {
    frequency: 1, amplitude: 1.03077, phase: 14.03624, re: 0.99999, im: 0.25
  }, {
    frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0
  }, {
    frequency: 3, amplitude: 1.03077, phase: -14.03624, re: 1, im: -0.25
  }]
}, {
  input: [{ amplitude: 4 }, { amplitude: 1 }, { amplitude: -3 }, { amplitude: 2 }],
  output: [{
    frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0
  }, {
    frequency: 1, amplitude: 1.76776, phase: 8.13010, re: 1.75, im: 0.25
  }, {
    frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0
  }, {
    frequency: 3, amplitude: 1.76776, phase: -8.13010, re: 1.75, im: -0.24999
  }]
}, {
  input: [{ amplitude: 1 }, { amplitude: 2 }, { amplitude: 3 }, { amplitude: 4 }],
  output: [{
    frequency: 0, amplitude: 2.5, phase: 0, re: 2.5, im: 0
  }, {
    frequency: 1, amplitude: 0.70710, phase: 135, re: -0.5, im: 0.49999
  }, {
    frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0
  }, {
    frequency: 3, amplitude: 0.70710, phase: -134.99999, re: -0.49999, im: -0.5
  }]
}];

var FourierTester = function () {
  function FourierTester() {
    _classCallCheck(this, FourierTester);
  }

  _createClass(FourierTester, null, [{
    key: 'testDirectFourierTransform',

    /**
     * @param {function} fourierTransform
     */
    value: function testDirectFourierTransform(fourierTransform) {
      fourierTestCases.forEach(function (testCase) {
        var input = testCase.input,
            expectedOutput = testCase.output;

        // Try to split input signal into sequence of pure sinusoids.

        var formattedInput = input.map(function (sample) {
          return sample.amplitude;
        });
        var currentOutput = fourierTransform(formattedInput);

        // Check the signal has been split into proper amount of sub-signals.
        expect(currentOutput.length).toBeGreaterThanOrEqual(formattedInput.length);

        // Now go through all the signals and check their frequency, amplitude and phase.
        expectedOutput.forEach(function (expectedSignal, frequency) {
          // Get template data we want to test against.
          var currentSignal = currentOutput[frequency];
          var currentPolarSignal = currentSignal.getPolarForm(false);

          // Check all signal parameters.
          expect(frequency).toBe(expectedSignal.frequency);
          expect(currentSignal.re).toBeCloseTo(expectedSignal.re, 4);
          expect(currentSignal.im).toBeCloseTo(expectedSignal.im, 4);
          expect(currentPolarSignal.phase).toBeCloseTo(expectedSignal.phase, 4);
          expect(currentPolarSignal.radius).toBeCloseTo(expectedSignal.amplitude, 4);
        });
      });
    }

    /**
     * @param {function} inverseFourierTransform
     */

  }, {
    key: 'testInverseFourierTransform',
    value: function testInverseFourierTransform(inverseFourierTransform) {
      fourierTestCases.forEach(function (testCase) {
        var expectedOutput = testCase.input,
            inputFrequencies = testCase.output;

        // Try to join frequencies into time signal.

        var formattedInput = inputFrequencies.map(function (frequency) {
          return new _ComplexNumber2.default({ re: frequency.re, im: frequency.im });
        });
        var currentOutput = inverseFourierTransform(formattedInput);

        // Check the signal has been combined of proper amount of time samples.
        expect(currentOutput.length).toBeLessThanOrEqual(formattedInput.length);

        // Now go through all the amplitudes and check their values.
        expectedOutput.forEach(function (expectedAmplitudes, timer) {
          // Get template data we want to test against.
          var currentAmplitude = currentOutput[timer];

          // Check if current amplitude is close enough to the calculated one.
          expect(currentAmplitude).toBeCloseTo(expectedAmplitudes.amplitude, 4);
        });
      });
    }
  }]);

  return FourierTester;
}();

exports.default = FourierTester;