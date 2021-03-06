'use strict';

var _BinarySearchTreeNode = require('../BinarySearchTreeNode');

var _BinarySearchTreeNode2 = _interopRequireDefault(_BinarySearchTreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinarySearchTreeNode', function () {
  it('should create binary search tree', function () {
    var bstNode = new _BinarySearchTreeNode2.default(2);

    expect(bstNode.value).toBe(2);
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();
  });

  it('should insert in itself if it is empty', function () {
    var bstNode = new _BinarySearchTreeNode2.default();
    bstNode.insert(1);

    expect(bstNode.value).toBe(1);
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();
  });

  it('should insert nodes in correct order', function () {
    var bstNode = new _BinarySearchTreeNode2.default(2);
    var insertedNode1 = bstNode.insert(1);

    expect(insertedNode1.value).toBe(1);
    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);

    var insertedNode2 = bstNode.insert(3);

    expect(insertedNode2.value).toBe(3);
    expect(bstNode.toString()).toBe('1,2,3');
    expect(bstNode.contains(3)).toBe(true);
    expect(bstNode.contains(4)).toBe(false);

    bstNode.insert(7);

    expect(bstNode.toString()).toBe('1,2,3,7');
    expect(bstNode.contains(7)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);

    bstNode.insert(4);

    expect(bstNode.toString()).toBe('1,2,3,4,7');
    expect(bstNode.contains(4)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);

    bstNode.insert(6);

    expect(bstNode.toString()).toBe('1,2,3,4,6,7');
    expect(bstNode.contains(6)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);
  });

  it('should not insert duplicates', function () {
    var bstNode = new _BinarySearchTreeNode2.default(2);
    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);

    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);
  });

  it('should find min node', function () {
    var node = new _BinarySearchTreeNode2.default(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin()).not.toBeNull();
    expect(node.findMin().value).toBe(1);
  });

  it('should be possible to attach meta information to binary search tree nodes', function () {
    var node = new _BinarySearchTreeNode2.default(10);

    node.insert(20);
    var node1 = node.insert(30);
    node.insert(5);
    node.insert(40);
    var node2 = node.insert(1);

    node.meta.set('color', 'red');
    node1.meta.set('color', 'black');
    node2.meta.set('color', 'white');

    expect(node.meta.get('color')).toBe('red');

    expect(node.findMin()).not.toBeNull();
    expect(node.findMin().value).toBe(1);
    expect(node.findMin().meta.get('color')).toBe('white');
    expect(node.find(30).meta.get('color')).toBe('black');
  });

  it('should find node', function () {
    var node = new _BinarySearchTreeNode2.default(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6)).toBeNull();
    expect(node.find(5)).not.toBeNull();
    expect(node.find(5).value).toBe(5);
  });

  it('should remove leaf nodes', function () {
    var bstRootNode = new _BinarySearchTreeNode2.default();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);

    expect(bstRootNode.toString()).toBe('5,10,20');

    var removed1 = bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    var removed2 = bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('10');
    expect(removed2).toBe(true);
  });

  it('should remove nodes with one child', function () {
    var bstRootNode = new _BinarySearchTreeNode2.default();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);

    expect(bstRootNode.toString()).toBe('5,10,20,30');

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,30');

    bstRootNode.insert(1);
    expect(bstRootNode.toString()).toBe('1,5,10,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('1,10,30');
  });

  it('should remove nodes with two children', function () {
    var bstRootNode = new _BinarySearchTreeNode2.default();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);
    bstRootNode.insert(15);
    bstRootNode.insert(25);

    expect(bstRootNode.toString()).toBe('5,10,15,20,25,30');
    expect(bstRootNode.find(20).left.value).toBe(15);
    expect(bstRootNode.find(20).right.value).toBe(30);

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,15,25,30');

    bstRootNode.remove(15);
    expect(bstRootNode.toString()).toBe('5,10,25,30');

    bstRootNode.remove(10);
    expect(bstRootNode.toString()).toBe('5,25,30');
    expect(bstRootNode.value).toBe(25);

    bstRootNode.remove(25);
    expect(bstRootNode.toString()).toBe('5,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('30');
  });

  it('should remove node with no parent', function () {
    var bstRootNode = new _BinarySearchTreeNode2.default();
    expect(bstRootNode.toString()).toBe('');

    bstRootNode.insert(1);
    bstRootNode.insert(2);
    expect(bstRootNode.toString()).toBe('1,2');

    bstRootNode.remove(1);
    expect(bstRootNode.toString()).toBe('2');

    bstRootNode.remove(2);
    expect(bstRootNode.toString()).toBe('');
  });

  it('should throw error when trying to remove not existing node', function () {
    var bstRootNode = new _BinarySearchTreeNode2.default();

    bstRootNode.insert(10);
    bstRootNode.insert(20);

    function removeNotExistingElementFromTree() {
      bstRootNode.remove(30);
    }

    expect(removeNotExistingElementFromTree).toThrow();
  });

  it('should be possible to use objects as node values', function () {
    var nodeValueComparatorCallback = function nodeValueComparatorCallback(a, b) {
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

    var bstNode = new _BinarySearchTreeNode2.default(obj2, nodeValueComparatorCallback);
    bstNode.insert(obj1);

    expect(bstNode.toString()).toBe('obj1,obj2');
    expect(bstNode.contains(obj1)).toBe(true);
    expect(bstNode.contains(obj3)).toBe(false);

    bstNode.insert(obj3);

    expect(bstNode.toString()).toBe('obj1,obj2,obj3');
    expect(bstNode.contains(obj3)).toBe(true);

    expect(bstNode.findMin().value).toEqual(obj1);
  });

  it('should abandon removed node', function () {
    var rootNode = new _BinarySearchTreeNode2.default('foo');
    rootNode.insert('bar');
    var childNode = rootNode.find('bar');
    rootNode.remove('bar');

    expect(childNode.parent).toBeNull();
  });
});