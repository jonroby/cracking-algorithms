'use strict';

var _DisjointSetItem = require('../DisjointSetItem');

var _DisjointSetItem2 = _interopRequireDefault(_DisjointSetItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DisjointSetItem', function () {
  it('should do basic manipulation with disjoint set item', function () {
    var itemA = new _DisjointSetItem2.default('A');
    var itemB = new _DisjointSetItem2.default('B');
    var itemC = new _DisjointSetItem2.default('C');
    var itemD = new _DisjointSetItem2.default('D');

    expect(itemA.getRank()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe('A');
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);
    expect(itemC.getRank()).toBe(1);

    expect(itemB.getRank()).toBe(0);
    expect(itemD.getRank()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(true);
    expect(itemD.isRoot()).toBe(false);

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(false);
    expect(itemD.isRoot()).toBe(false);

    expect(itemA.getRank()).toEqual(3);
    expect(itemB.getRank()).toEqual(0);
    expect(itemC.getRank()).toEqual(1);
  });

  it('should do basic manipulation with disjoint set item with custom key extractor', function () {
    var keyExtractor = function keyExtractor(value) {
      return value.key;
    };

    var itemA = new _DisjointSetItem2.default({ key: 'A', value: 1 }, keyExtractor);
    var itemB = new _DisjointSetItem2.default({ key: 'B', value: 2 }, keyExtractor);
    var itemC = new _DisjointSetItem2.default({ key: 'C', value: 3 }, keyExtractor);
    var itemD = new _DisjointSetItem2.default({ key: 'D', value: 4 }, keyExtractor);

    expect(itemA.getRank()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe('A');
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);
    expect(itemC.getRank()).toBe(1);

    expect(itemB.getRank()).toBe(0);
    expect(itemD.getRank()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(true);
    expect(itemD.isRoot()).toBe(false);

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(false);
    expect(itemD.isRoot()).toBe(false);

    expect(itemA.getRank()).toEqual(3);
    expect(itemB.getRank()).toEqual(0);
    expect(itemC.getRank()).toEqual(1);
  });
});