'use strict';

var _HeapSort = require('../HeapSort');

var _HeapSort2 = _interopRequireDefault(_HeapSort);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complexity constants.
// These numbers don't take into account up/dow heapifying of the heap.
// Thus these numbers are higher in reality.
var SORTED_ARRAY_VISITING_COUNT = 40;
var NOT_SORTED_ARRAY_VISITING_COUNT = 40;
var REVERSE_SORTED_ARRAY_VISITING_COUNT = 40;
var EQUAL_ARRAY_VISITING_COUNT = 40;

describe('HeapSort', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_HeapSort2.default);
  });

  it('should sort array with custom comparator', function () {
    _SortTester.SortTester.testSortWithCustomComparator(_HeapSort2.default);
  });

  it('should sort negative numbers', function () {
    _SortTester.SortTester.testNegativeNumbersSort(_HeapSort2.default);
  });

  it('should visit EQUAL array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_HeapSort2.default, _SortTester.equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_HeapSort2.default, _SortTester.sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit NOT SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_HeapSort2.default, _SortTester.notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_HeapSort2.default, _SortTester.reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});