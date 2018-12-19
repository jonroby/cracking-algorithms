'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fastFourierTransform;

var _ComplexNumber = require('../complex-number/ComplexNumber');

var _ComplexNumber2 = _interopRequireDefault(_ComplexNumber);

var _bitLength = require('../bits/bitLength');

var _bitLength2 = _interopRequireDefault(_bitLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the number which is the flipped binary representation of input.
 *
 * @param {number} input
 * @param {number} bitsCount
 * @return {number}
 */
function reverseBits(input, bitsCount) {
  var reversedBits = 0;

  for (var bitIndex = 0; bitIndex < bitsCount; bitIndex += 1) {
    reversedBits *= 2;

    if (Math.floor(input / (1 << bitIndex)) % 2 === 1) {
      reversedBits += 1;
    }
  }

  return reversedBits;
}

/**
 * Returns the radix-2 fast fourier transform of the given array.
 * Optionally computes the radix-2 inverse fast fourier transform.
 *
 * @param {ComplexNumber[]} inputData
 * @param {boolean} [inverse]
 * @return {ComplexNumber[]}
 */
function fastFourierTransform(inputData) {
  var inverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var bitsCount = (0, _bitLength2.default)(inputData.length - 1);
  var N = 1 << bitsCount;

  while (inputData.length < N) {
    inputData.push(new _ComplexNumber2.default());
  }

  var output = [];
  for (var dataSampleIndex = 0; dataSampleIndex < N; dataSampleIndex += 1) {
    output[dataSampleIndex] = inputData[reverseBits(dataSampleIndex, bitsCount)];
  }

  for (var blockLength = 2; blockLength <= N; blockLength *= 2) {
    var imaginarySign = inverse ? -1 : 1;
    var phaseStep = new _ComplexNumber2.default({
      re: Math.cos(2 * Math.PI / blockLength),
      im: imaginarySign * Math.sin(2 * Math.PI / blockLength)
    });

    for (var blockStart = 0; blockStart < N; blockStart += blockLength) {
      var phase = new _ComplexNumber2.default({ re: 1, im: 0 });

      for (var signalId = blockStart; signalId < blockStart + blockLength / 2; signalId += 1) {
        var component = output[signalId + blockLength / 2].multiply(phase);

        var upd1 = output[signalId].add(component);
        var upd2 = output[signalId].subtract(component);

        output[signalId] = upd1;
        output[signalId + blockLength / 2] = upd2;

        phase = phase.multiply(phaseStep);
      }
    }
  }

  if (inverse) {
    for (var _signalId = 0; _signalId < N; _signalId += 1) {
      output[_signalId] /= N;
    }
  }

  return output;
}