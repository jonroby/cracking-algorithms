'use strict';

var _jumpSearch = require('../jumpSearch');

var _jumpSearch2 = _interopRequireDefault(_jumpSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('jumpSearch', function () {
  it('should search for an element in sorted array', function () {
    expect((0, _jumpSearch2.default)([], 1)).toBe(-1);
    expect((0, _jumpSearch2.default)([1], 2)).toBe(-1);
    expect((0, _jumpSearch2.default)([1], 1)).toBe(0);
    expect((0, _jumpSearch2.default)([1, 2], 1)).toBe(0);
    expect((0, _jumpSearch2.default)([1, 2], 1)).toBe(0);
    expect((0, _jumpSearch2.default)([1, 1, 1], 1)).toBe(0);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 2)).toBe(1);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 0)).toBe(-1);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 0)).toBe(-1);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 7)).toBe(-1);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 5)).toBe(2);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 20)).toBe(4);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 30)).toBe(7);
    expect((0, _jumpSearch2.default)([1, 2, 5, 10, 20, 21, 24, 30, 48], 48)).toBe(8);
  });

  it('should search object in sorted array', function () {
    var sortedArrayOfObjects = [{ key: 1, value: 'value1' }, { key: 2, value: 'value2' }, { key: 3, value: 'value3' }];

    var comparator = function comparator(a, b) {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect((0, _jumpSearch2.default)([], { key: 1 }, comparator)).toBe(-1);
    expect((0, _jumpSearch2.default)(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(-1);
    expect((0, _jumpSearch2.default)(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect((0, _jumpSearch2.default)(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect((0, _jumpSearch2.default)(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });
});