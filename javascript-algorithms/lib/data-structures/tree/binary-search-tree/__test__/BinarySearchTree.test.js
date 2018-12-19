'use strict';

var _BinarySearchTree = require('../BinarySearchTree');

var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTree', function () {
  it('should create binary search tree', function () {
    var bst = new _BinarySearchTree2.default();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('should insert values', function () {
    var bst = new _BinarySearchTree2.default();

    var insertedNode1 = bst.insert(10);
    var insertedNode2 = bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');
    expect(insertedNode1.value).toBe(10);
    expect(insertedNode2.value).toBe(20);
  });

  it('should check if value exists', function () {
    var bst = new _BinarySearchTree2.default();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBe(true);
    expect(bst.contains(40)).toBe(false);
  });

  it('should remove nodes', function () {
    var bst = new _BinarySearchTree2.default();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    var removed1 = bst.remove(5);
    expect(bst.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    var removed2 = bst.remove(20);
    expect(bst.toString()).toBe('10');
    expect(removed2).toBe(true);
  });

  it('should insert object values', function () {
    var nodeValueCompareFunction = function nodeValueCompareFunction(a, b) {
      var normalizedA = a || { value: null };
      var normalizedB = b || { value: null };

      if (normalizedA.value === normalizedB.value) {
        return 0;
      }

      return normalizedA.value < normalizedB.value ? -1 : 1;
    };

    var obj1 = { key: 'obj1', value: 1, toString: function toString() {
        return 'obj1';
      } };
    var obj2 = { key: 'obj2', value: 2, toString: function toString() {
        return 'obj2';
      } };
    var obj3 = { key: 'obj3', value: 3, toString: function toString() {
        return 'obj3';
      } };

    var bst = new _BinarySearchTree2.default(nodeValueCompareFunction);

    bst.insert(obj2);
    bst.insert(obj3);
    bst.insert(obj1);

    expect(bst.toString()).toBe('obj1,obj2,obj3');
  });

  it('should be traversed to sorted array', function () {
    var bst = new _BinarySearchTree2.default();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe('-20,-10,6,10,20,25');
    expect(bst.root.height).toBe(2);

    bst.insert(4);

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(bst.root.height).toBe(3);
  });
});