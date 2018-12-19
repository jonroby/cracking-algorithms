'use strict';

var _PolynomialHash = require('../PolynomialHash');

var _PolynomialHash2 = _interopRequireDefault(_PolynomialHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PolynomialHash', function () {
  it('should calculate new hash based on previous one', function () {
    var bases = [3, 79, 101, 3251, 13229, 122743, 3583213];
    var mods = [79, 101];
    var frameSizes = [5, 20];

    // @TODO: Provide Unicode support.
    var text = 'Lorem Ipsum is simply dummy text of the printing and ' + 'typesetting industry. Lorem Ipsum has been the industry\'s standard ' + 'galley of type and \uFFFF scrambled it to make a type specimen book. It ' + 'electronic 耀 typesetting, remaining essentially unchanged. It was '
    // + 'popularised in the \u{20005} \u{20000}1960s with the release of Letraset sheets '
    + 'publishing software like Aldus PageMaker 耀 including versions of Lorem.';

    // Check hashing for different prime base.
    bases.forEach(function (base) {
      mods.forEach(function (modulus) {
        var polynomialHash = new _PolynomialHash2.default({ base: base, modulus: modulus });

        // Check hashing for different word lengths.
        frameSizes.forEach(function (frameSize) {
          var previousWord = text.substr(0, frameSize);
          var previousHash = polynomialHash.hash(previousWord);

          // Shift frame through the whole text.
          for (var frameShift = 1; frameShift < text.length - frameSize; frameShift += 1) {
            var currentWord = text.substr(frameShift, frameSize);
            var currentHash = polynomialHash.hash(currentWord);
            var currentRollingHash = polynomialHash.roll(previousHash, previousWord, currentWord);

            // Check that rolling hash is the same as directly calculated hash.
            expect(currentRollingHash).toBe(currentHash);

            previousWord = currentWord;
            previousHash = currentHash;
          }
        });
      });
    });
  });

  it('should generate numeric hashed less than 100', function () {
    var polynomialHash = new _PolynomialHash2.default({ modulus: 100 });

    expect(polynomialHash.hash('Some long text that is used as a key')).toBe(41);
    expect(polynomialHash.hash('Test')).toBe(92);
    expect(polynomialHash.hash('a')).toBe(97);
    expect(polynomialHash.hash('b')).toBe(98);
    expect(polynomialHash.hash('c')).toBe(99);
    expect(polynomialHash.hash('d')).toBe(0);
    expect(polynomialHash.hash('e')).toBe(1);
    expect(polynomialHash.hash('ab')).toBe(87);

    // @TODO: Provide Unicode support.
    expect(polynomialHash.hash('\uD840\uDC00')).toBe(92);
  });
});