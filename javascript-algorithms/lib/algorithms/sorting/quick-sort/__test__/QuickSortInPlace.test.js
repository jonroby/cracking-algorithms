'use strict';

var _QuickSortInPlace = require('../QuickSortInPlace');

var _QuickSortInPlace2 = _interopRequireDefault(_QuickSortInPlace);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complexity constants.
var SORTED_ARRAY_VISITING_COUNT = 19;
var NOT_SORTED_ARRAY_VISITING_COUNT = 12;
var REVERSE_SORTED_ARRAY_VISITING_COUNT = 19;
var EQUAL_ARRAY_VISITING_COUNT = 19;

describe('QuickSortInPlace', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_QuickSortInPlace2.default);
  });

  it('should sort array with custom comparator', function () {
    _SortTester.SortTester.testSortWithCustomComparator(_QuickSortInPlace2.default);
  });

  it('should sort negative numbers', function () {
    _SortTester.SortTester.testNegativeNumbersSort(_QuickSortInPlace2.default);
  });

  it('should visit EQUAL array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSortInPlace2.default, _SortTester.equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSortInPlace2.default, _SortTester.sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit NOT SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSortInPlace2.default, _SortTester.notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSortInPlace2.default, _SortTester.reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});