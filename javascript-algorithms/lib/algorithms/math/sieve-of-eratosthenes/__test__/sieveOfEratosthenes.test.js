'use strict';

var _sieveOfEratosthenes = require('../sieveOfEratosthenes');

var _sieveOfEratosthenes2 = _interopRequireDefault(_sieveOfEratosthenes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('sieveOfEratosthenes', function () {
  it('should find all primes less than or equal to n', function () {
    expect((0, _sieveOfEratosthenes2.default)(5)).toEqual([2, 3, 5]);
    expect((0, _sieveOfEratosthenes2.default)(10)).toEqual([2, 3, 5, 7]);
    expect((0, _sieveOfEratosthenes2.default)(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});