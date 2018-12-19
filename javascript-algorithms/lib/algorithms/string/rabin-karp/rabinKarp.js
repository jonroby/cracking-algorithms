'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rabinKarp;

var _PolynomialHash = require('../../cryptography/polynomial-hash/PolynomialHash');

var _PolynomialHash2 = _interopRequireDefault(_PolynomialHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} text - Text that may contain the searchable word.
 * @param {string} word - Word that is being searched in text.
 * @return {number} - Position of the word in text.
 */
function rabinKarp(text, word) {
  var hasher = new _PolynomialHash2.default();

  // Calculate word hash that we will use for comparison with other substring hashes.
  var wordHash = hasher.hash(word);

  var prevFrame = null;
  var currentFrameHash = null;

  // Go through all substring of the text that may match.
  for (var charIndex = 0; charIndex <= text.length - word.length; charIndex += 1) {
    var currentFrame = text.substring(charIndex, charIndex + word.length);

    // Calculate the hash of current substring.
    if (currentFrameHash === null) {
      currentFrameHash = hasher.hash(currentFrame);
    } else {
      currentFrameHash = hasher.roll(currentFrameHash, prevFrame, currentFrame);
    }

    prevFrame = currentFrame;

    // Compare the hash of current substring and seeking string.
    // In case if hashes match let's make sure that substrings are equal.
    // In case of hash collision the strings may not be equal.
    if (wordHash === currentFrameHash && text.substr(charIndex, word.length) === word) {
      return charIndex;
    }
  }

  return -1;
}