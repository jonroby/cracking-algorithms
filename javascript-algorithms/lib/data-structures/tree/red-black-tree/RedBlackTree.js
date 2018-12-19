'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BinarySearchTree2 = require('../binary-search-tree/BinarySearchTree');

var _BinarySearchTree3 = _interopRequireDefault(_BinarySearchTree2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Possible colors of red-black tree nodes.
var RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black'
};

// Color property name in meta information of the nodes.
var COLOR_PROP_NAME = 'color';

var RedBlackTree = function (_BinarySearchTree) {
  _inherits(RedBlackTree, _BinarySearchTree);

  function RedBlackTree() {
    _classCallCheck(this, RedBlackTree);

    return _possibleConstructorReturn(this, (RedBlackTree.__proto__ || Object.getPrototypeOf(RedBlackTree)).apply(this, arguments));
  }

  _createClass(RedBlackTree, [{
    key: 'insert',

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    value: function insert(value) {
      var insertedNode = _get(RedBlackTree.prototype.__proto__ || Object.getPrototypeOf(RedBlackTree.prototype), 'insert', this).call(this, value);

      // if (!this.root.left && !this.root.right) {
      if (this.nodeComparator.equal(insertedNode, this.root)) {
        // Make root to always be black.
        this.makeNodeBlack(insertedNode);
      } else {
        // Make all newly inserted nodes to be red.
        this.makeNodeRed(insertedNode);
      }

      // Check all conditions and balance the node.
      this.balance(insertedNode);

      return insertedNode;
    }

    /**
     * @param {*} value
     * @return {boolean}
     */

  }, {
    key: 'remove',
    value: function remove(value) {
      throw new Error('Can\'t remove ' + value + '. Remove method is not implemented yet');
    }

    /**
     * @param {BinarySearchTreeNode} node
     */

  }, {
    key: 'balance',
    value: function balance(node) {
      // If it is a root node then nothing to balance here.
      if (this.nodeComparator.equal(node, this.root)) {
        return;
      }

      // If the parent is black then done. Nothing to balance here.
      if (this.isNodeBlack(node.parent)) {
        return;
      }

      var grandParent = node.parent.parent;

      if (node.uncle && this.isNodeRed(node.uncle)) {
        // If node has red uncle then we need to do RECOLORING.

        // Recolor parent and uncle to black.
        this.makeNodeBlack(node.uncle);
        this.makeNodeBlack(node.parent);

        if (!this.nodeComparator.equal(grandParent, this.root)) {
          // Recolor grand-parent to red if it is not root.
          this.makeNodeRed(grandParent);
        } else {
          // If grand-parent is black root don't do anything.
          // Since root already has two black sibling that we've just recolored.
          return;
        }

        // Now do further checking for recolored grand-parent.
        this.balance(grandParent);
      } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
        // If node uncle is black or absent then we need to do ROTATIONS.

        if (grandParent) {
          // Grand parent that we will receive after rotations.
          var newGrandParent = void 0;

          if (this.nodeComparator.equal(grandParent.left, node.parent)) {
            // Left case.
            if (this.nodeComparator.equal(node.parent.left, node)) {
              // Left-left case.
              newGrandParent = this.leftLeftRotation(grandParent);
            } else {
              // Left-right case.
              newGrandParent = this.leftRightRotation(grandParent);
            }
          } else {
            // Right case.
            if (this.nodeComparator.equal(node.parent.right, node)) {
              // Right-right case.
              newGrandParent = this.rightRightRotation(grandParent);
            } else {
              // Right-left case.
              newGrandParent = this.rightLeftRotation(grandParent);
            }
          }

          // Set newGrandParent as a root if it doesn't have parent.
          if (newGrandParent && newGrandParent.parent === null) {
            this.root = newGrandParent;

            // Recolor root into black.
            this.makeNodeBlack(this.root);
          }

          // Check if new grand parent don't violate red-black-tree rules.
          this.balance(newGrandParent);
        }
      }
    }

    /**
     * Left Left Case (p is left child of g and x is left child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'leftLeftRotation',
    value: function leftLeftRotation(grandParentNode) {
      // Memorize the parent of grand-parent node.
      var grandGrandParent = grandParentNode.parent;

      // Check what type of sibling is our grandParentNode is (left or right).
      var grandParentNodeIsLeft = void 0;
      if (grandGrandParent) {
        grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
      }

      // Memorize grandParentNode's left node.
      var parentNode = grandParentNode.left;

      // Memorize parent's right node since we're going to transfer it to
      // grand parent's left subtree.
      var parentRightNode = parentNode.right;

      // Make grandParentNode to be right child of parentNode.
      parentNode.setRight(grandParentNode);

      // Move child's right subtree to grandParentNode's left subtree.
      grandParentNode.setLeft(parentRightNode);

      // Put parentNode node in place of grandParentNode.
      if (grandGrandParent) {
        if (grandParentNodeIsLeft) {
          grandGrandParent.setLeft(parentNode);
        } else {
          grandGrandParent.setRight(parentNode);
        }
      } else {
        // Make parent node a root
        parentNode.parent = null;
      }

      // Swap colors of granParent and parent nodes.
      this.swapNodeColors(parentNode, grandParentNode);

      // Return new root node.
      return parentNode;
    }

    /**
     * Left Right Case (p is left child of g and x is right child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'leftRightRotation',
    value: function leftRightRotation(grandParentNode) {
      // Memorize left and left-right nodes.
      var parentNode = grandParentNode.left;
      var childNode = parentNode.right;

      // We need to memorize child left node to prevent losing
      // left child subtree. Later it will be re-assigned to
      // parent's right sub-tree.
      var childLeftNode = childNode.left;

      // Make parentNode to be a left child of childNode node.
      childNode.setLeft(parentNode);

      // Move child's left subtree to parent's right subtree.
      parentNode.setRight(childLeftNode);

      // Put left-right node in place of left node.
      grandParentNode.setLeft(childNode);

      // Now we're ready to do left-left rotation.
      return this.leftLeftRotation(grandParentNode);
    }

    /**
     * Right Right Case (p is right child of g and x is right child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'rightRightRotation',
    value: function rightRightRotation(grandParentNode) {
      // Memorize the parent of grand-parent node.
      var grandGrandParent = grandParentNode.parent;

      // Check what type of sibling is our grandParentNode is (left or right).
      var grandParentNodeIsLeft = void 0;
      if (grandGrandParent) {
        grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
      }

      // Memorize grandParentNode's right node.
      var parentNode = grandParentNode.right;

      // Memorize parent's left node since we're going to transfer it to
      // grand parent's right subtree.
      var parentLeftNode = parentNode.left;

      // Make grandParentNode to be left child of parentNode.
      parentNode.setLeft(grandParentNode);

      // Transfer all left nodes from parent to right sub-tree of grandparent.
      grandParentNode.setRight(parentLeftNode);

      // Put parentNode node in place of grandParentNode.
      if (grandGrandParent) {
        if (grandParentNodeIsLeft) {
          grandGrandParent.setLeft(parentNode);
        } else {
          grandGrandParent.setRight(parentNode);
        }
      } else {
        // Make parent node a root.
        parentNode.parent = null;
      }

      // Swap colors of granParent and parent nodes.
      this.swapNodeColors(parentNode, grandParentNode);

      // Return new root node.
      return parentNode;
    }

    /**
     * Right Left Case (p is right child of g and x is left child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'rightLeftRotation',
    value: function rightLeftRotation(grandParentNode) {
      // Memorize right and right-left nodes.
      var parentNode = grandParentNode.right;
      var childNode = parentNode.left;

      // We need to memorize child right node to prevent losing
      // right child subtree. Later it will be re-assigned to
      // parent's left sub-tree.
      var childRightNode = childNode.right;

      // Make parentNode to be a right child of childNode.
      childNode.setRight(parentNode);

      // Move child's right subtree to parent's left subtree.
      parentNode.setLeft(childRightNode);

      // Put childNode node in place of parentNode.
      grandParentNode.setRight(childNode);

      // Now we're ready to do right-right rotation.
      return this.rightRightRotation(grandParentNode);
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'makeNodeRed',
    value: function makeNodeRed(node) {
      node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

      return node;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */

  }, {
    key: 'makeNodeBlack',
    value: function makeNodeBlack(node) {
      node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

      return node;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */

  }, {
    key: 'isNodeRed',
    value: function isNodeRed(node) {
      return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */

  }, {
    key: 'isNodeBlack',
    value: function isNodeBlack(node) {
      return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */

  }, {
    key: 'isNodeColored',
    value: function isNodeColored(node) {
      return this.isNodeRed(node) || this.isNodeBlack(node);
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} firstNode
     * @param {BinarySearchTreeNode|BinaryTreeNode} secondNode
     */

  }, {
    key: 'swapNodeColors',
    value: function swapNodeColors(firstNode, secondNode) {
      var firstColor = firstNode.meta.get(COLOR_PROP_NAME);
      var secondColor = secondNode.meta.get(COLOR_PROP_NAME);

      firstNode.meta.set(COLOR_PROP_NAME, secondColor);
      secondNode.meta.set(COLOR_PROP_NAME, firstColor);
    }
  }]);

  return RedBlackTree;
}(_BinarySearchTree3.default);

exports.default = RedBlackTree;