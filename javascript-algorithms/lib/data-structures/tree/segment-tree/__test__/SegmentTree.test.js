'use strict';

var _SegmentTree = require('../SegmentTree');

var _SegmentTree2 = _interopRequireDefault(_SegmentTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SegmentTree', function () {
  it('should build tree for input array #0 with length of power of two', function () {
    var array = [-1, 2];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([-1, -1, 2]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length - 1);
  });

  it('should build tree for input array #1 with length of power of two', function () {
    var array = [-1, 2, 4, 0];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([-1, -1, 0, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length - 1);
  });

  it('should build tree for input array #0 with length not of power of two', function () {
    var array = [0, 1, 2];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([0, 0, 2, 0, 1, null, null]);
    expect(segmentTree.segmentTree.length).toBe(2 * 4 - 1);
  });

  it('should build tree for input array #1 with length not of power of two', function () {
    var array = [-1, 3, 4, 0, 2, 1];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.segmentTree).toEqual([-1, -1, 0, -1, 4, 0, 1, -1, 3, null, null, 0, 2, null, null]);
    expect(segmentTree.segmentTree.length).toBe(2 * 8 - 1);
  });

  it('should build max array', function () {
    var array = [-1, 2, 4, 0];
    var segmentTree = new _SegmentTree2.default(array, Math.max, -Infinity);

    expect(segmentTree.segmentTree).toEqual([4, 2, 4, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length - 1);
  });

  it('should build sum array', function () {
    var array = [-1, 2, 4, 0];
    var segmentTree = new _SegmentTree2.default(array, function (a, b) {
      return a + b;
    }, 0);

    expect(segmentTree.segmentTree).toEqual([5, 1, 4, -1, 2, 4, 0]);
    expect(segmentTree.segmentTree.length).toBe(2 * array.length - 1);
  });

  it('should do min range query on power of two length array', function () {
    var array = [-1, 3, 4, 0, 2, 1];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 5)).toBe(-1);
    expect(segmentTree.rangeQuery(0, 2)).toBe(-1);
    expect(segmentTree.rangeQuery(1, 3)).toBe(0);
    expect(segmentTree.rangeQuery(2, 4)).toBe(0);
    expect(segmentTree.rangeQuery(4, 5)).toBe(1);
    expect(segmentTree.rangeQuery(2, 2)).toBe(4);
  });

  it('should do min range query on not power of two length array', function () {
    var array = [-1, 2, 4, 0];
    var segmentTree = new _SegmentTree2.default(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 4)).toBe(-1);
    expect(segmentTree.rangeQuery(0, 1)).toBe(-1);
    expect(segmentTree.rangeQuery(1, 3)).toBe(0);
    expect(segmentTree.rangeQuery(1, 2)).toBe(2);
    expect(segmentTree.rangeQuery(2, 3)).toBe(0);
    expect(segmentTree.rangeQuery(2, 2)).toBe(4);
  });

  it('should do max range query', function () {
    var array = [-1, 3, 4, 0, 2, 1];
    var segmentTree = new _SegmentTree2.default(array, Math.max, -Infinity);

    expect(segmentTree.rangeQuery(0, 5)).toBe(4);
    expect(segmentTree.rangeQuery(0, 1)).toBe(3);
    expect(segmentTree.rangeQuery(1, 3)).toBe(4);
    expect(segmentTree.rangeQuery(2, 4)).toBe(4);
    expect(segmentTree.rangeQuery(4, 5)).toBe(2);
    expect(segmentTree.rangeQuery(3, 3)).toBe(0);
  });

  it('should do sum range query', function () {
    var array = [-1, 3, 4, 0, 2, 1];
    var segmentTree = new _SegmentTree2.default(array, function (a, b) {
      return a + b;
    }, 0);

    expect(segmentTree.rangeQuery(0, 5)).toBe(9);
    expect(segmentTree.rangeQuery(0, 1)).toBe(2);
    expect(segmentTree.rangeQuery(1, 3)).toBe(7);
    expect(segmentTree.rangeQuery(2, 4)).toBe(6);
    expect(segmentTree.rangeQuery(4, 5)).toBe(3);
    expect(segmentTree.rangeQuery(3, 3)).toBe(0);
  });
});