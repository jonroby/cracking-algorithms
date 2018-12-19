'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TrieNode = require('./TrieNode');

var _TrieNode2 = _interopRequireDefault(_TrieNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Character that we will use for trie tree root.
var HEAD_CHARACTER = '*';

var Trie = function () {
  function Trie() {
    _classCallCheck(this, Trie);

    this.head = new _TrieNode2.default(HEAD_CHARACTER);
  }

  /**
   * @param {string} word
   * @return {Trie}
   */


  _createClass(Trie, [{
    key: 'addWord',
    value: function addWord(word) {
      var characters = Array.from(word);
      var currentNode = this.head;

      for (var charIndex = 0; charIndex < characters.length; charIndex += 1) {
        var isComplete = charIndex === characters.length - 1;
        currentNode = currentNode.addChild(characters[charIndex], isComplete);
      }

      return this;
    }

    /**
     * @param {string} word
     * @return {Trie}
     */

  }, {
    key: 'deleteWord',
    value: function deleteWord(word) {
      var depthFirstDelete = function depthFirstDelete(currentNode) {
        var charIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (charIndex >= word.length) {
          // Return if we're trying to delete the character that is out of word's scope.
          return;
        }

        var character = word[charIndex];
        var nextNode = currentNode.getChild(character);

        if (nextNode == null) {
          // Return if we're trying to delete a word that has not been added to the Trie.
          return;
        }

        // Go deeper.
        depthFirstDelete(nextNode, charIndex + 1);

        // Since we're going to delete a word let's un-mark its last character isCompleteWord flag.
        if (charIndex === word.length - 1) {
          nextNode.isCompleteWord = false;
        }

        // childNode is deleted only if:
        // - childNode has NO children
        // - childNode.isCompleteWord === false
        currentNode.removeChild(character);
      };

      // Start depth-first deletion from the head node.
      depthFirstDelete(this.head);

      return this;
    }

    /**
     * @param {string} word
     * @return {string[]}
     */

  }, {
    key: 'suggestNextCharacters',
    value: function suggestNextCharacters(word) {
      var lastCharacter = this.getLastCharacterNode(word);

      if (!lastCharacter) {
        return null;
      }

      return lastCharacter.suggestChildren();
    }

    /**
     * Check if complete word exists in Trie.
     *
     * @param {string} word
     * @return {boolean}
     */

  }, {
    key: 'doesWordExist',
    value: function doesWordExist(word) {
      var lastCharacter = this.getLastCharacterNode(word);

      return !!lastCharacter && lastCharacter.isCompleteWord;
    }

    /**
     * @param {string} word
     * @return {TrieNode}
     */

  }, {
    key: 'getLastCharacterNode',
    value: function getLastCharacterNode(word) {
      var characters = Array.from(word);
      var currentNode = this.head;

      for (var charIndex = 0; charIndex < characters.length; charIndex += 1) {
        if (!currentNode.hasChild(characters[charIndex])) {
          return null;
        }

        currentNode = currentNode.getChild(characters[charIndex]);
      }

      return currentNode;
    }
  }]);

  return Trie;
}();

exports.default = Trie;