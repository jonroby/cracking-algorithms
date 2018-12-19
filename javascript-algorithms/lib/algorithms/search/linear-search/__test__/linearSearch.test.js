'use strict';

var _linearSearch = require('../linearSearch');

var _linearSearch2 = _interopRequireDefault(_linearSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('linearSearch', function () {
  it('should search all numbers in array', function () {
    var array = [1, 2, 4, 6, 2];

    expect((0, _linearSearch2.default)(array, 10)).toEqual([]);
    expect((0, _linearSearch2.default)(array, 1)).toEqual([0]);
    expect((0, _linearSearch2.default)(array, 2)).toEqual([1, 4]);
  });

  it('should search all strings in array', function () {
    var array = ['a', 'b', 'a'];

    expect((0, _linearSearch2.default)(array, 'c')).toEqual([]);
    expect((0, _linearSearch2.default)(array, 'b')).toEqual([1]);
    expect((0, _linearSearch2.default)(array, 'a')).toEqual([0, 2]);
  });

  it('should search through objects as well', function () {
    var comparatorCallback = function comparatorCallback(a, b) {
      if (a.key === b.key) {
        return 0;
      }

      return a.key <= b.key ? -1 : 1;
    };

    var array = [{ key: 5 }, { key: 6 }, { key: 7 }, { key: 6 }];

    expect((0, _linearSearch2.default)(array, { key: 10 }, comparatorCallback)).toEqual([]);
    expect((0, _linearSearch2.default)(array, { key: 5 }, comparatorCallback)).toEqual([0]);
    expect((0, _linearSearch2.default)(array, { key: 6 }, comparatorCallback)).toEqual([1, 3]);
  });
});