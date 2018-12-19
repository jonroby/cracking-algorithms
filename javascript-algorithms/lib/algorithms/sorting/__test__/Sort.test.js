'use strict';

var _Sort = require('../Sort');

var _Sort2 = _interopRequireDefault(_Sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Sort', function () {
  it('should throw an error when trying to call Sort.sort() method directly', function () {
    function doForbiddenSort() {
      var sorter = new _Sort2.default();
      sorter.sort();
    }

    expect(doForbiddenSort).toThrow();
  });
});