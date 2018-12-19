'use strict';

var _Trie = require('../Trie');

var _Trie2 = _interopRequireDefault(_Trie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Trie', function () {
  it('should create trie', function () {
    var trie = new _Trie2.default();

    expect(trie).toBeDefined();
    expect(trie.head.toString()).toBe('*');
  });

  it('should add words to trie', function () {
    var trie = new _Trie2.default();

    trie.addWord('cat');

    expect(trie.head.toString()).toBe('*:c');
    expect(trie.head.getChild('c').toString()).toBe('c:a');

    trie.addWord('car');
    expect(trie.head.toString()).toBe('*:c');
    expect(trie.head.getChild('c').toString()).toBe('c:a');
    expect(trie.head.getChild('c').getChild('a').toString()).toBe('a:t,r');
    expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*');
  });

  it('should delete words from trie', function () {
    var trie = new _Trie2.default();

    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('cat');
    trie.addWord('cart');
    expect(trie.doesWordExist('carpet')).toBe(true);
    expect(trie.doesWordExist('car')).toBe(true);
    expect(trie.doesWordExist('cart')).toBe(true);
    expect(trie.doesWordExist('cat')).toBe(true);

    // Try to delete not-existing word first.
    trie.deleteWord('carpool');
    expect(trie.doesWordExist('carpet')).toBe(true);
    expect(trie.doesWordExist('car')).toBe(true);
    expect(trie.doesWordExist('cart')).toBe(true);
    expect(trie.doesWordExist('cat')).toBe(true);

    trie.deleteWord('carpet');
    expect(trie.doesWordExist('carpet')).toEqual(false);
    expect(trie.doesWordExist('car')).toEqual(true);
    expect(trie.doesWordExist('cart')).toBe(true);
    expect(trie.doesWordExist('cat')).toBe(true);

    trie.deleteWord('cat');
    expect(trie.doesWordExist('car')).toEqual(true);
    expect(trie.doesWordExist('cart')).toBe(true);
    expect(trie.doesWordExist('cat')).toBe(false);

    trie.deleteWord('car');
    expect(trie.doesWordExist('car')).toEqual(false);
    expect(trie.doesWordExist('cart')).toBe(true);

    trie.deleteWord('cart');
    expect(trie.doesWordExist('car')).toEqual(false);
    expect(trie.doesWordExist('cart')).toBe(false);
  });

  it('should suggests next characters', function () {
    var trie = new _Trie2.default();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p']);
    expect(trie.suggestNextCharacters('cat')).toEqual(['s']);
    expect(trie.suggestNextCharacters('cab')).toBeNull();
  });

  it('should check if word exists', function () {
    var trie = new _Trie2.default();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.doesWordExist('cat')).toBe(true);
    expect(trie.doesWordExist('cats')).toBe(true);
    expect(trie.doesWordExist('carpet')).toBe(true);
    expect(trie.doesWordExist('car')).toBe(true);
    expect(trie.doesWordExist('cap')).toBe(false);
    expect(trie.doesWordExist('call')).toBe(false);
  });
});