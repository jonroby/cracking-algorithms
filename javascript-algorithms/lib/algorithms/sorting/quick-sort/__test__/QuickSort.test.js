'use strict';

var _QuickSort = require('../QuickSort');

var _QuickSort2 = _interopRequireDefault(_QuickSort);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complexity constants.
var SORTED_ARRAY_VISITING_COUNT = 190;
var NOT_SORTED_ARRAY_VISITING_COUNT = 62;
var REVERSE_SORTED_ARRAY_VISITING_COUNT = 190;
var EQUAL_ARRAY_VISITING_COUNT = 19;

describe('QuickSort', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_QuickSort2.default);
  });

  it('should sort array with custom comparator', function () {
    _SortTester.SortTester.testSortWithCustomComparator(_QuickSort2.default);
  });

  it('should do stable sorting', function () {
    _SortTester.SortTester.testSortStability(_QuickSort2.default);
  });

  it('should sort negative numbers', function () {
    _SortTester.SortTester.testNegativeNumbersSort(_QuickSort2.default);
  });

  it('should visit EQUAL array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSort2.default, _SortTester.equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSort2.default, _SortTester.sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit NOT SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSort2.default, _SortTester.notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_QuickSort2.default, _SortTester.reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});