'use strict';

var _Heap = require('../Heap');

var _Heap2 = _interopRequireDefault(_Heap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Heap', function () {
  it('should not allow to create instance of the Heap directly', function () {
    var instantiateHeap = function instantiateHeap() {
      var heap = new _Heap2.default();
      heap.add(5);
    };

    expect(instantiateHeap).toThrow();
  });
});