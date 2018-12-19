'use strict';

var _BinaryTreeNode = require('../../../../data-structures/tree/BinaryTreeNode');

var _BinaryTreeNode2 = _interopRequireDefault(_BinaryTreeNode);

var _depthFirstSearch = require('../depthFirstSearch');

var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('depthFirstSearch', function () {
  it('should perform DFS operation on tree', function () {
    var nodeA = new _BinaryTreeNode2.default('A');
    var nodeB = new _BinaryTreeNode2.default('B');
    var nodeC = new _BinaryTreeNode2.default('C');
    var nodeD = new _BinaryTreeNode2.default('D');
    var nodeE = new _BinaryTreeNode2.default('E');
    var nodeF = new _BinaryTreeNode2.default('F');
    var nodeG = new _BinaryTreeNode2.default('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    // In-order traversing.
    expect(nodeA.toString()).toBe('D,B,E,A,F,C,G');

    var enterNodeCallback = jest.fn();
    var leaveNodeCallback = jest.fn();

    // Traverse tree without callbacks first to check default ones.
    (0, _depthFirstSearch2.default)(nodeA);

    // Traverse tree with callbacks.
    (0, _depthFirstSearch2.default)(nodeA, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });

    expect(enterNodeCallback).toHaveBeenCalledTimes(7);
    expect(leaveNodeCallback).toHaveBeenCalledTimes(7);

    // Check node entering.
    expect(enterNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(enterNodeCallback.mock.calls[1][0].value).toEqual('B');
    expect(enterNodeCallback.mock.calls[2][0].value).toEqual('D');
    expect(enterNodeCallback.mock.calls[3][0].value).toEqual('E');
    expect(enterNodeCallback.mock.calls[4][0].value).toEqual('C');
    expect(enterNodeCallback.mock.calls[5][0].value).toEqual('F');
    expect(enterNodeCallback.mock.calls[6][0].value).toEqual('G');

    // Check node leaving.
    expect(leaveNodeCallback.mock.calls[0][0].value).toEqual('D');
    expect(leaveNodeCallback.mock.calls[1][0].value).toEqual('E');
    expect(leaveNodeCallback.mock.calls[2][0].value).toEqual('B');
    expect(leaveNodeCallback.mock.calls[3][0].value).toEqual('F');
    expect(leaveNodeCallback.mock.calls[4][0].value).toEqual('G');
    expect(leaveNodeCallback.mock.calls[5][0].value).toEqual('C');
    expect(leaveNodeCallback.mock.calls[6][0].value).toEqual('A');
  });

  it('allow users to redefine node visiting logic', function () {
    var nodeA = new _BinaryTreeNode2.default('A');
    var nodeB = new _BinaryTreeNode2.default('B');
    var nodeC = new _BinaryTreeNode2.default('C');
    var nodeD = new _BinaryTreeNode2.default('D');
    var nodeE = new _BinaryTreeNode2.default('E');
    var nodeF = new _BinaryTreeNode2.default('F');
    var nodeG = new _BinaryTreeNode2.default('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    // In-order traversing.
    expect(nodeA.toString()).toBe('D,B,E,A,F,C,G');

    var enterNodeCallback = jest.fn();
    var leaveNodeCallback = jest.fn();

    // Traverse tree without callbacks first to check default ones.
    (0, _depthFirstSearch2.default)(nodeA);

    // Traverse tree with callbacks.
    (0, _depthFirstSearch2.default)(nodeA, {
      allowTraversal: function allowTraversal(node, child) {
        // Forbid traversing left part of the tree.
        return child.value !== 'B';
      },
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });

    expect(enterNodeCallback).toHaveBeenCalledTimes(4);
    expect(leaveNodeCallback).toHaveBeenCalledTimes(4);

    // Check node entering.
    expect(enterNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(enterNodeCallback.mock.calls[1][0].value).toEqual('C');
    expect(enterNodeCallback.mock.calls[2][0].value).toEqual('F');
    expect(enterNodeCallback.mock.calls[3][0].value).toEqual('G');

    // Check node leaving.
    expect(leaveNodeCallback.mock.calls[0][0].value).toEqual('F');
    expect(leaveNodeCallback.mock.calls[1][0].value).toEqual('G');
    expect(leaveNodeCallback.mock.calls[2][0].value).toEqual('C');
    expect(leaveNodeCallback.mock.calls[3][0].value).toEqual('A');
  });
});