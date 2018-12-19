'use strict';

var _fisherYates = require('../fisherYates');

var _fisherYates2 = _interopRequireDefault(_fisherYates);

var _SortTester = require('../../../sorting/SortTester');

var _QuickSort = require('../../../sorting/quick-sort/QuickSort');

var _QuickSort2 = _interopRequireDefault(_QuickSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fisherYates', function () {
  it('should shuffle small arrays', function () {
    expect((0, _fisherYates2.default)([])).toEqual([]);
    expect((0, _fisherYates2.default)([1])).toEqual([1]);
  });

  it('should shuffle array randomly', function () {
    var shuffledArray = (0, _fisherYates2.default)(_SortTester.sortedArr);
    var sorter = new _QuickSort2.default();

    expect(shuffledArray.length).toBe(_SortTester.sortedArr.length);
    expect(shuffledArray).not.toEqual(_SortTester.sortedArr);
    expect(sorter.sort(shuffledArray)).toEqual(_SortTester.sortedArr);
  });
});