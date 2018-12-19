'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inverseDiscreteFourierTransform;

var _ComplexNumber = require('../complex-number/ComplexNumber');

var _ComplexNumber2 = _interopRequireDefault(_ComplexNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLOSE_TO_ZERO_THRESHOLD = 1e-10;

/**
 * Inverse Discrete Fourier Transform (IDFT): frequencies to time.
 *
 * Time complexity: O(N^2)
 *
 * @param {ComplexNumber[]} frequencies - Frequencies summands of the final signal.
 * @param {number} zeroThreshold - Threshold that is used to convert real and imaginary numbers
 * to zero in case if they are smaller then this.
 *
 * @return {number[]} - Discrete amplitudes distributed in time.
 */
function inverseDiscreteFourierTransform(frequencies) {
  var zeroThreshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CLOSE_TO_ZERO_THRESHOLD;

  var N = frequencies.length;
  var amplitudes = [];

  // Go through every discrete point of time.
  for (var timer = 0; timer < N; timer += 1) {
    // Compound amplitude at current time.
    var amplitude = new _ComplexNumber2.default();

    // Go through all discrete frequencies.
    for (var frequency = 0; frequency < N; frequency += 1) {
      var currentFrequency = frequencies[frequency];

      // Calculate rotation angle.
      var rotationAngle = 2 * Math.PI * frequency * (timer / N);

      // Remember that e^ix = cos(x) + i * sin(x);
      var frequencyContribution = new _ComplexNumber2.default({
        re: Math.cos(rotationAngle),
        im: Math.sin(rotationAngle)
      }).multiply(currentFrequency);

      amplitude = amplitude.add(frequencyContribution);
    }

    // Close to zero? You're zero.
    if (Math.abs(amplitude.re) < zeroThreshold) {
      amplitude.re = 0;
    }

    if (Math.abs(amplitude.im) < zeroThreshold) {
      amplitude.im = 0;
    }

    // Add current frequency signal to the list of compound signals.
    amplitudes[timer] = amplitude.re;
  }

  return amplitudes;
}