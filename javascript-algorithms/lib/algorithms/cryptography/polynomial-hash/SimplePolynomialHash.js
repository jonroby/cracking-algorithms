"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_BASE = 17;

var SimplePolynomialHash = function () {
  /**
   * @param {number} [base] - Base number that is used to create the polynomial.
   */
  function SimplePolynomialHash() {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BASE;

    _classCallCheck(this, SimplePolynomialHash);

    this.base = base;
  }

  /**
   * Function that creates hash representation of the word.
   *
   * Time complexity: O(word.length).
   *
   * @assumption: This version of the function  doesn't use modulo operator.
   * Thus it may produce number overflows by generating numbers that are
   * bigger than Number.MAX_SAFE_INTEGER. This function is mentioned here
   * for simplicity and LEARNING reasons.
   *
   * @param {string} word - String that needs to be hashed.
   * @return {number}
   */


  _createClass(SimplePolynomialHash, [{
    key: "hash",
    value: function hash(word) {
      var hash = 0;
      for (var charIndex = 0; charIndex < word.length; charIndex += 1) {
        hash += word.charCodeAt(charIndex) * Math.pow(this.base, charIndex);
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
     * @assumption: This function doesn't use modulo operator and thus is not safe since
     * it may deal with numbers that are bigger than Number.MAX_SAFE_INTEGER. This
     * function is mentioned here for simplicity and LEARNING reasons.
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

      var prevValue = prevWord.charCodeAt(0);
      var newValue = newWord.charCodeAt(newWord.length - 1);

      hash -= prevValue;
      hash /= this.base;
      hash += newValue * Math.pow(this.base, newWord.length - 1);

      return hash;
    }
  }]);

  return SimplePolynomialHash;
}();

exports.default = SimplePolynomialHash;