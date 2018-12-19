'use strict';

var _binarySearch = require('../binarySearch');

var _binarySearch2 = _interopRequireDefault(_binarySearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('binarySearch', function () {
  it('should search number in sorted array', function () {
    expect((0, _binarySearch2.default)([], 1)).toBe(-1);
    expect((0, _binarySearch2.default)([1], 1)).toBe(0);
    expect((0, _binarySearch2.default)([1, 2], 1)).toBe(0);
    expect((0, _binarySearch2.default)([1, 2], 2)).toBe(1);
    expect((0, _binarySearch2.default)([1, 5, 10, 12], 1)).toBe(0);
    expect((0, _binarySearch2.default)([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect((0, _binarySearch2.default)([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect((0, _binarySearch2.default)([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect((0, _binarySearch2.default)([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
  });

  it('should search object in sorted array', function () {
    var sortedArrayOfObjects = [{ key: 1, value: 'value1' }, { key: 2, value: 'value2' }, { key: 3, value: 'value3' }];

    var comparator = function comparator(a, b) {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect((0, _binarySearch2.default)([], { key: 1 }, comparator)).toBe(-1);
    expect((0, _binarySearch2.default)(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(-1);
    expect((0, _binarySearch2.default)(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect((0, _binarySearch2.default)(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect((0, _binarySearch2.default)(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });
});