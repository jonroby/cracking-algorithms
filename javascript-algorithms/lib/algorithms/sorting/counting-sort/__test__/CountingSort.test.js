'use strict';

var _CountingSort = require('../CountingSort');

var _CountingSort2 = _interopRequireDefault(_CountingSort);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Complexity constants.
var SORTED_ARRAY_VISITING_COUNT = 60;
var NOT_SORTED_ARRAY_VISITING_COUNT = 60;
var REVERSE_SORTED_ARRAY_VISITING_COUNT = 60;
var EQUAL_ARRAY_VISITING_COUNT = 60;

describe('CountingSort', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_CountingSort2.default);
  });

  it('should sort negative numbers', function () {
    _SortTester.SortTester.testNegativeNumbersSort(_CountingSort2.default);
  });

  it('should allow to use specify max/min integer value in array to make sorting faster', function () {
    var visitingCallback = jest.fn();
    var sorter = new _CountingSort2.default({ visitingCallback: visitingCallback });

    // Detect biggest number in array in prior.
    var biggestElement = Math.max.apply(Math, _toConsumableArray(_SortTester.notSortedArr));

    // Detect smallest number in array in prior.
    var smallestElement = Math.min.apply(Math, _toConsumableArray(_SortTester.notSortedArr));

    var sortedArray = sorter.sort(_SortTester.notSortedArr, smallestElement, biggestElement);

    expect(sortedArray).toEqual(_SortTester.sortedArr);
    // Normally visitingCallback is being called 60 times but in this case
    // it should be called only 40 times.
    expect(visitingCallback).toHaveBeenCalledTimes(40);
  });

  it('should visit EQUAL array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_CountingSort2.default, _SortTester.equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_CountingSort2.default, _SortTester.sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit NOT SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_CountingSort2.default, _SortTester.notSortedArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE SORTED array element specified number of times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_CountingSort2.default, _SortTester.reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });
});