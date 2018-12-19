'use strict';

var _hammingDistance = require('../hammingDistance');

var _hammingDistance2 = _interopRequireDefault(_hammingDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('hammingDistance', function () {
  it('should throw an error when trying to compare the strings of different lengths', function () {
    var compareStringsOfDifferentLength = function compareStringsOfDifferentLength() {
      (0, _hammingDistance2.default)('a', 'aa');
    };

    expect(compareStringsOfDifferentLength).toThrowError();
  });

  it('should calculate difference between two strings', function () {
    expect((0, _hammingDistance2.default)('a', 'a')).toBe(0);
    expect((0, _hammingDistance2.default)('a', 'b')).toBe(1);
    expect((0, _hammingDistance2.default)('abc', 'add')).toBe(2);
    expect((0, _hammingDistance2.default)('karolin', 'kathrin')).toBe(3);
    expect((0, _hammingDistance2.default)('karolin', 'kerstin')).toBe(3);
    expect((0, _hammingDistance2.default)('1011101', '1001001')).toBe(2);
    expect((0, _hammingDistance2.default)('2173896', '2233796')).toBe(3);
  });
});