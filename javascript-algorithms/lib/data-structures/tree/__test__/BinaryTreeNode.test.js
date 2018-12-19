'use strict';

var _BinaryTreeNode = require('../BinaryTreeNode');

var _BinaryTreeNode2 = _interopRequireDefault(_BinaryTreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BinaryTreeNode', function () {
  it('should create node', function () {
    var node = new _BinaryTreeNode2.default();

    expect(node).toBeDefined();

    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();

    var leftNode = new _BinaryTreeNode2.default(1);
    var rightNode = new _BinaryTreeNode2.default(3);
    var rootNode = new _BinaryTreeNode2.default(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.value).toBe(2);
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right.value).toBe(3);
  });

  it('should set parent', function () {
    var leftNode = new _BinaryTreeNode2.default(1);
    var rightNode = new _BinaryTreeNode2.default(3);
    var rootNode = new _BinaryTreeNode2.default(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.parent).toBeNull();
    expect(rootNode.left.parent.value).toBe(2);
    expect(rootNode.right.parent.value).toBe(2);
    expect(rootNode.right.parent).toEqual(rootNode);
  });

  it('should traverse node', function () {
    var leftNode = new _BinaryTreeNode2.default(1);
    var rightNode = new _BinaryTreeNode2.default(3);
    var rootNode = new _BinaryTreeNode2.default(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.toString()).toBe('1,2,3');
  });

  it('should remove child node', function () {
    var leftNode = new _BinaryTreeNode2.default(1);
    var rightNode = new _BinaryTreeNode2.default(3);
    var rootNode = new _BinaryTreeNode2.default(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.removeChild(rootNode.left)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([2, 3]);

    expect(rootNode.removeChild(rootNode.right)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([2]);

    expect(rootNode.removeChild(rootNode.right)).toBe(false);
    expect(rootNode.traverseInOrder()).toEqual([2]);
  });

  it('should replace child node', function () {
    var leftNode = new _BinaryTreeNode2.default(1);
    var rightNode = new _BinaryTreeNode2.default(3);
    var rootNode = new _BinaryTreeNode2.default(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    var replacementNode = new _BinaryTreeNode2.default(5);
    rightNode.setRight(replacementNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBe(true);
    expect(rootNode.right.value).toBe(5);
    expect(rootNode.right.right).toBeNull();
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBe(false);
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, replacementNode)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([1, 2, 5]);

    expect(rootNode.replaceChild(rootNode.left, replacementNode)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([5, 2, 5]);

    expect(rootNode.replaceChild(new _BinaryTreeNode2.default(), new _BinaryTreeNode2.default())).toBe(false);
  });

  it('should calculate node height', function () {
    var root = new _BinaryTreeNode2.default(1);
    var left = new _BinaryTreeNode2.default(3);
    var right = new _BinaryTreeNode2.default(2);
    var grandLeft = new _BinaryTreeNode2.default(5);
    var grandRight = new _BinaryTreeNode2.default(6);
    var grandGrandLeft = new _BinaryTreeNode2.default(7);

    expect(root.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);
    expect(left.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    left.setLeft(grandLeft).setRight(grandRight);

    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(grandLeft.height).toBe(0);
    expect(grandRight.height).toBe(0);
    expect(root.balanceFactor).toBe(1);

    grandLeft.setLeft(grandGrandLeft);

    expect(root.height).toBe(3);
    expect(left.height).toBe(2);
    expect(grandLeft.height).toBe(1);
    expect(grandRight.height).toBe(0);
    expect(grandGrandLeft.height).toBe(0);
    expect(root.balanceFactor).toBe(2);
  });

  it('should calculate node height for right nodes as well', function () {
    var root = new _BinaryTreeNode2.default(1);
    var right = new _BinaryTreeNode2.default(2);

    root.setRight(right);

    expect(root.height).toBe(1);
    expect(right.height).toBe(0);
    expect(root.balanceFactor).toBe(-1);
  });

  it('should set null for left and right node', function () {
    var root = new _BinaryTreeNode2.default(2);
    var left = new _BinaryTreeNode2.default(1);
    var right = new _BinaryTreeNode2.default(3);

    root.setLeft(left);
    root.setRight(right);

    expect(root.left.value).toBe(1);
    expect(root.right.value).toBe(3);

    root.setLeft(null);
    root.setRight(null);

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
  });

  it('should be possible to create node with object as a value', function () {
    var obj1 = { key: 'object_1', toString: function toString() {
        return 'object_1';
      } };
    var obj2 = { key: 'object_2' };

    var node1 = new _BinaryTreeNode2.default(obj1);
    var node2 = new _BinaryTreeNode2.default(obj2);

    node1.setLeft(node2);

    expect(node1.value).toEqual(obj1);
    expect(node2.value).toEqual(obj2);
    expect(node1.left.value).toEqual(obj2);

    node1.removeChild(node2);

    expect(node1.value).toEqual(obj1);
    expect(node2.value).toEqual(obj2);
    expect(node1.left).toBeNull();

    expect(node1.toString()).toBe('object_1');
    expect(node2.toString()).toBe('[object Object]');
  });

  it('should be possible to attach meta information to the node', function () {
    var redNode = new _BinaryTreeNode2.default(1);
    var blackNode = new _BinaryTreeNode2.default(2);

    redNode.meta.set('color', 'red');
    blackNode.meta.set('color', 'black');

    expect(redNode.meta.get('color')).toBe('red');
    expect(blackNode.meta.get('color')).toBe('black');
  });

  it('should detect right uncle', function () {
    var grandParent = new _BinaryTreeNode2.default('grand-parent');
    var parent = new _BinaryTreeNode2.default('parent');
    var uncle = new _BinaryTreeNode2.default('uncle');
    var child = new _BinaryTreeNode2.default('child');

    expect(grandParent.uncle).not.toBeDefined();
    expect(parent.uncle).not.toBeDefined();

    grandParent.setLeft(parent);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).not.toBeDefined();

    parent.setLeft(child);

    expect(child.uncle).not.toBeDefined();

    grandParent.setRight(uncle);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).toBeDefined();
    expect(child.uncle).toEqual(uncle);
  });

  it('should detect left uncle', function () {
    var grandParent = new _BinaryTreeNode2.default('grand-parent');
    var parent = new _BinaryTreeNode2.default('parent');
    var uncle = new _BinaryTreeNode2.default('uncle');
    var child = new _BinaryTreeNode2.default('child');

    expect(grandParent.uncle).not.toBeDefined();
    expect(parent.uncle).not.toBeDefined();

    grandParent.setRight(parent);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).not.toBeDefined();

    parent.setRight(child);

    expect(child.uncle).not.toBeDefined();

    grandParent.setLeft(uncle);

    expect(parent.uncle).not.toBeDefined();
    expect(child.uncle).toBeDefined();
    expect(child.uncle).toEqual(uncle);
  });

  it('should be possible to set node values', function () {
    var node = new _BinaryTreeNode2.default('initial_value');

    expect(node.value).toBe('initial_value');

    node.setValue('new_value');

    expect(node.value).toBe('new_value');
  });

  it('should be possible to copy node', function () {
    var root = new _BinaryTreeNode2.default('root');
    var left = new _BinaryTreeNode2.default('left');
    var right = new _BinaryTreeNode2.default('right');

    root.setLeft(left).setRight(right);

    expect(root.toString()).toBe('left,root,right');

    var newRoot = new _BinaryTreeNode2.default('new_root');
    var newLeft = new _BinaryTreeNode2.default('new_left');
    var newRight = new _BinaryTreeNode2.default('new_right');

    newRoot.setLeft(newLeft).setRight(newRight);

    expect(newRoot.toString()).toBe('new_left,new_root,new_right');

    _BinaryTreeNode2.default.copyNode(root, newRoot);

    expect(root.toString()).toBe('left,root,right');
    expect(newRoot.toString()).toBe('left,root,right');
  });
});