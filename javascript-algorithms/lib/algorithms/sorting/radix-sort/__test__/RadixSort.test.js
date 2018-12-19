'use strict';

var _RadixSort = require('../RadixSort');

var _RadixSort2 = _interopRequireDefault(_RadixSort);

var _SortTester = require('../../SortTester');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complexity constants.
var ARRAY_OF_STRINGS_VISIT_COUNT = 24;
var ARRAY_OF_INTEGERS_VISIT_COUNT = 77;
describe('RadixSort', function () {
  it('should sort array', function () {
    _SortTester.SortTester.testSort(_RadixSort2.default);
  });

  it('should visit array of strings n (number of strings) x m (length of longest element) times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_RadixSort2.default, ['zzz', 'bb', 'a', 'rr', 'rrb', 'rrba'], ARRAY_OF_STRINGS_VISIT_COUNT);
  });

  it('should visit array of integers n (number of elements) x m (length of longest integer) times', function () {
    _SortTester.SortTester.testAlgorithmTimeComplexity(_RadixSort2.default, [3, 1, 75, 32, 884, 523, 4343456, 232, 123, 656, 343], ARRAY_OF_INTEGERS_VISIT_COUNT);
  });
});