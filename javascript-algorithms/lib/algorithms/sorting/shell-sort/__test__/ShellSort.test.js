'use strict';

var _ShellSort = require('../ShellSort');

var _ShellSort2 = _interopRequireDefault(_ShellSort);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complexity constants.
var SORTED_ARRAY_VISITING_COUNT = 320;
var NOT_SORTED_ARRAY_VISITING_COUNT = 320;
var REVERSE_SORTED_ARRAY_VISITING_COUNT = 320;
var EQUAL_ARRAY_VISITING_COUNT = 320;

describe('ShellSort', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_ShellSort2.default);
  });

  it('should sort array with custom comparator', function () {
    _SortTester.SortTester.testSortWithCustomComparator(_ShellSort2.default);
  });

  it('should sort negative numbers', function () {
    _SortTester.SortTester.testNegativeNumbersSort(_ShellSort2.default);
  });

  it('should visit EQUAL array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_ShellSort2.default, _SortTester.equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_ShellSort2.default, _SortTester.sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit NOT SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_ShellSort2.default, _SortTester.notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_ShellSort2.default, _SortTester.reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});