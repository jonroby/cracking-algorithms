'use strict';

var _RedBlackTree = require('../RedBlackTree');

var _RedBlackTree2 = _interopRequireDefault(_RedBlackTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('RedBlackTree', function () {
  it('should always color first inserted node as black', function () {
    var tree = new _RedBlackTree2.default();

    var firstInsertedNode = tree.insert(10);

    expect(tree.isNodeColored(firstInsertedNode)).toBe(true);
    expect(tree.isNodeBlack(firstInsertedNode)).toBe(true);
    expect(tree.isNodeRed(firstInsertedNode)).toBe(false);

    expect(tree.toString()).toBe('10');
    expect(tree.root.height).toBe(0);
  });

  it('should always color new leaf node as red', function () {
    var tree = new _RedBlackTree2.default();

    var firstInsertedNode = tree.insert(10);
    var secondInsertedNode = tree.insert(15);
    var thirdInsertedNode = tree.insert(5);

    expect(tree.isNodeBlack(firstInsertedNode)).toBe(true);
    expect(tree.isNodeRed(secondInsertedNode)).toBe(true);
    expect(tree.isNodeRed(thirdInsertedNode)).toBe(true);

    expect(tree.toString()).toBe('5,10,15');
    expect(tree.root.height).toBe(1);
  });

  it('should balance itself', function () {
    var tree = new _RedBlackTree2.default();

    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(25);
    tree.insert(30);

    expect(tree.toString()).toBe('5,10,15,20,25,30');
    expect(tree.root.height).toBe(3);
  });

  it('should balance itself when parent is black', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);

    expect(tree.isNodeBlack(node1)).toBe(true);

    var node2 = tree.insert(-10);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);

    var node3 = tree.insert(20);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);
    expect(tree.isNodeRed(node3)).toBe(true);

    var node4 = tree.insert(-20);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);

    var node5 = tree.insert(25);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);

    var node6 = tree.insert(6);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);

    expect(tree.toString()).toBe('-20,-10,6,10,20,25');
    expect(tree.root.height).toBe(2);

    var node7 = tree.insert(4);

    expect(tree.root.left.value).toEqual(node2.value);

    expect(tree.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(tree.root.height).toBe(3);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeBlack(node4)).toBe(true);
    expect(tree.isNodeBlack(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);
    expect(tree.isNodeBlack(node6)).toBe(true);
    expect(tree.isNodeRed(node7)).toBe(true);
  });

  it('should balance itself when uncle is red', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);
    var node2 = tree.insert(-10);
    var node3 = tree.insert(20);
    var node4 = tree.insert(-20);
    var node5 = tree.insert(6);
    var node6 = tree.insert(15);
    var node7 = tree.insert(25);
    var node8 = tree.insert(2);
    var node9 = tree.insert(8);

    expect(tree.toString()).toBe('-20,-10,2,6,8,10,15,20,25');
    expect(tree.root.height).toBe(3);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeBlack(node4)).toBe(true);
    expect(tree.isNodeBlack(node5)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);
    expect(tree.isNodeRed(node7)).toBe(true);
    expect(tree.isNodeRed(node8)).toBe(true);
    expect(tree.isNodeRed(node9)).toBe(true);

    var node10 = tree.insert(4);

    expect(tree.toString()).toBe('-20,-10,2,4,6,8,10,15,20,25');
    expect(tree.root.height).toBe(3);

    expect(tree.root.value).toBe(node5.value);

    expect(tree.isNodeBlack(node5)).toBe(true);
    expect(tree.isNodeRed(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);
    expect(tree.isNodeRed(node10)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);
    expect(tree.isNodeRed(node7)).toBe(true);
    expect(tree.isNodeBlack(node4)).toBe(true);
    expect(tree.isNodeBlack(node8)).toBe(true);
    expect(tree.isNodeBlack(node9)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
  });

  it('should do left-left rotation', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);
    var node2 = tree.insert(-10);
    var node3 = tree.insert(20);
    var node4 = tree.insert(7);
    var node5 = tree.insert(15);

    expect(tree.toString()).toBe('-10,7,10,15,20');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);

    var node6 = tree.insert(13);

    expect(tree.toString()).toBe('-10,7,10,13,15,20');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node5)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);
    expect(tree.isNodeRed(node3)).toBe(true);
  });

  it('should do left-right rotation', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);
    var node2 = tree.insert(-10);
    var node3 = tree.insert(20);
    var node4 = tree.insert(7);
    var node5 = tree.insert(15);

    expect(tree.toString()).toBe('-10,7,10,15,20');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);

    var node6 = tree.insert(17);

    expect(tree.toString()).toBe('-10,7,10,15,17,20');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node6)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);
    expect(tree.isNodeRed(node3)).toBe(true);
  });

  it('should do recoloring, left-left and left-right rotation', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);
    var node2 = tree.insert(-10);
    var node3 = tree.insert(20);
    var node4 = tree.insert(-20);
    var node5 = tree.insert(6);
    var node6 = tree.insert(15);
    var node7 = tree.insert(30);
    var node8 = tree.insert(1);
    var node9 = tree.insert(9);

    expect(tree.toString()).toBe('-20,-10,1,6,9,10,15,20,30');
    expect(tree.root.height).toBe(3);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeRed(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeBlack(node4)).toBe(true);
    expect(tree.isNodeBlack(node5)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);
    expect(tree.isNodeRed(node7)).toBe(true);
    expect(tree.isNodeRed(node8)).toBe(true);
    expect(tree.isNodeRed(node9)).toBe(true);

    tree.insert(4);

    expect(tree.toString()).toBe('-20,-10,1,4,6,9,10,15,20,30');
    expect(tree.root.height).toBe(3);
  });

  it('should do right-left rotation', function () {
    var tree = new _RedBlackTree2.default();

    var node1 = tree.insert(10);
    var node2 = tree.insert(-10);
    var node3 = tree.insert(20);
    var node4 = tree.insert(-20);
    var node5 = tree.insert(6);
    var node6 = tree.insert(30);

    expect(tree.toString()).toBe('-20,-10,6,10,20,30');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node3)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);

    var node7 = tree.insert(25);

    var rightNode = tree.root.right;
    var rightLeftNode = rightNode.left;
    var rightRightNode = rightNode.right;

    expect(rightNode.value).toBe(node7.value);
    expect(rightLeftNode.value).toBe(node3.value);
    expect(rightRightNode.value).toBe(node6.value);

    expect(tree.toString()).toBe('-20,-10,6,10,20,25,30');
    expect(tree.root.height).toBe(2);

    expect(tree.isNodeBlack(node1)).toBe(true);
    expect(tree.isNodeBlack(node2)).toBe(true);
    expect(tree.isNodeBlack(node7)).toBe(true);
    expect(tree.isNodeRed(node4)).toBe(true);
    expect(tree.isNodeRed(node5)).toBe(true);
    expect(tree.isNodeRed(node3)).toBe(true);
    expect(tree.isNodeRed(node6)).toBe(true);
  });

  it('should do left-left rotation with left grand-parent', function () {
    var tree = new _RedBlackTree2.default();

    tree.insert(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(5);

    expect(tree.toString()).toBe('5,10,15,20,25');
    expect(tree.root.height).toBe(2);
  });

  it('should do right-right rotation with left grand-parent', function () {
    var tree = new _RedBlackTree2.default();

    tree.insert(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(17);
    tree.insert(19);

    expect(tree.toString()).toBe('15,17,19,20,25');
    expect(tree.root.height).toBe(2);
  });

  it('should throw an error when trying to remove node', function () {
    var removeNodeFromRedBlackTree = function removeNodeFromRedBlackTree() {
      var tree = new _RedBlackTree2.default();

      tree.remove(1);
    };

    expect(removeNodeFromRedBlackTree).toThrowError();
  });
});