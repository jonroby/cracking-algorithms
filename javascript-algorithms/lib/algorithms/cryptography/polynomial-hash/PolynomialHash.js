"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_BASE = 37;
var DEFAULT_MODULUS = 101;

var PolynomialHash = function () {
  /**
   * @param {number} [base] - Base number that is used to create the polynomial.
   * @param {number} [modulus] - Modulus number that keeps the hash from overflowing.
   */
  function PolynomialHash() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$base = _ref.base,
        base = _ref$base === undefined ? DEFAULT_BASE : _ref$base,
        _ref$modulus = _ref.modulus,
        modulus = _ref$modulus === undefined ? DEFAULT_MODULUS : _ref$modulus;

    _classCallCheck(this, PolynomialHash);

    this.base = base;
    this.modulus = modulus;
  }

  /**
   * Function that creates hash representation of the word.
   *
   * Time complexity: O(word.length).
   *
   * @param {string} word - String that needs to be hashed.
   * @return {number}
   */


  _createClass(PolynomialHash, [{
    key: "hash",
    value: function hash(word) {
      var _this = this;

      var charCodes = Array.from(word).map(function (char) {
        return _this.charToNumber(char);
      });

      var hash = 0;
      for (var charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
        hash *= this.base;
        hash += charCodes[charIndex];
        hash %= this.modulus;
      }

      return hash;
    }

    /**
     * Function that creates hash representation of the word
     * based on previous word (shifted by one character left) hash value.
     *
     * Recalculates the hash representation of a word so that it isn't
     * necessary to traverse the whole word again.
     *
     * Time complexity: O(1).
     *
     * @param {number} prevHash
     * @param {string} prevWord
     * @param {string} newWord
     * @return {number}
     */

  }, {
    key: "roll",
    value: function roll(prevHash, prevWord, newWord) {
      var hash = prevHash;

      var prevValue = this.charToNumber(prevWord[0]);
      var newValue = this.charToNumber(newWord[newWord.length - 1]);

      var prevValueMultiplier = 1;
      for (var i = 1; i < prevWord.length; i += 1) {
        prevValueMultiplier *= this.base;
        prevValueMultiplier %= this.modulus;
      }

      hash += this.modulus;
      hash -= prevValue * prevValueMultiplier % this.modulus;

      hash *= this.base;
      hash += newValue;
      hash %= this.modulus;

      return hash;
    }

    /**
     * Converts char to number.
     *
     * @param {string} char
     * @return {number}
     */

  }, {
    key: "charToNumber",
    value: function charToNumber(char) {
      var charCode = char.codePointAt(0);

      // Check if character has surrogate pair.
      var surrogate = char.codePointAt(1);
      if (surrogate !== undefined) {
        var surrogateShift = Math.pow(2, 16);
        charCode += surrogate * surrogateShift;
      }

      return charCode;
    }
  }]);

  return PolynomialHash;
}();

exports.default = PolynomialHash;