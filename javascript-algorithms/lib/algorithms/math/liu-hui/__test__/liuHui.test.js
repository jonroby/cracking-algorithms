'use strict';

var _liuHui = require('../liuHui');

var _liuHui2 = _interopRequireDefault(_liuHui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('liuHui', function () {
  it('should calculate π based on 12-gon', function () {
    expect((0, _liuHui2.default)(1)).toBe(3);
  });

  it('should calculate π based on 24-gon', function () {
    expect((0, _liuHui2.default)(2)).toBe(3.105828541230249);
  });

  it('should calculate π based on 6144-gon', function () {
    expect((0, _liuHui2.default)(10)).toBe(3.1415921059992717);
  });

  it('should calculate π based on 201326592-gon', function () {
    expect((0, _liuHui2.default)(25)).toBe(3.141592653589793);
  });
});