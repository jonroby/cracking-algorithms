'use strict';

var _SimplePolynomialHash = require('../SimplePolynomialHash');

var _SimplePolynomialHash2 = _interopRequireDefault(_SimplePolynomialHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PolynomialHash', function () {
  it('should calculate new hash based on previous one', function () {
    var bases = [3, 5];
    var frameSizes = [5, 10];

    var text = 'Lorem Ipsum is simply dummy text of the printing and ' + 'typesetting industry. Lorem Ipsum has been the industry\'s standard ' + 'galley of type and \uFFFF scrambled it to make a type specimen book. It ' + 'electronic 耀 typesetting, remaining essentially unchanged. It was ' + 'popularised in the 1960s with the release of Letraset sheets ' + 'publishing software like Aldus 耀 PageMaker including versions of Lorem.';

    // Check hashing for different prime base.
    bases.forEach(function (base) {
      var polynomialHash = new _SimplePolynomialHash2.default(base);

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

  it('should generate numeric hashed', function () {
    var polynomialHash = new _SimplePolynomialHash2.default();

    expect(polynomialHash.hash('Test')).toBe(604944);
    expect(polynomialHash.hash('a')).toBe(97);
    expect(polynomialHash.hash('b')).toBe(98);
    expect(polynomialHash.hash('c')).toBe(99);
    expect(polynomialHash.hash('d')).toBe(100);
    expect(polynomialHash.hash('e')).toBe(101);
    expect(polynomialHash.hash('ab')).toBe(1763);
    expect(polynomialHash.hash('abc')).toBe(30374);
  });
});