'use strict';

var _cartesianProduct = require('../cartesianProduct');

var _cartesianProduct2 = _interopRequireDefault(_cartesianProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('cartesianProduct', function () {
  it('should return null if there is not enough info for calculation', function () {
    var product1 = (0, _cartesianProduct2.default)([1], null);
    var product2 = (0, _cartesianProduct2.default)([], null);

    expect(product1).toBeNull();
    expect(product2).toBeNull();
  });

  it('should calculate the product of two sets', function () {
    var product1 = (0, _cartesianProduct2.default)([1], [1]);
    var product2 = (0, _cartesianProduct2.default)([1, 2], [3, 5]);

    expect(product1).toEqual([[1, 1]]);
    expect(product2).toEqual([[1, 3], [1, 5], [2, 3], [2, 5]]);
  });
});