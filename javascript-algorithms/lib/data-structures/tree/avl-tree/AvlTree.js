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

var AvlTree = function (_BinarySearchTree) {
  _inherits(AvlTree, _BinarySearchTree);

  function AvlTree() {
    _classCallCheck(this, AvlTree);

    return _possibleConstructorReturn(this, (AvlTree.__proto__ || Object.getPrototypeOf(AvlTree)).apply(this, arguments));
  }

  _createClass(AvlTree, [{
    key: 'insert',

    /**
     * @param {*} value
     */
    value: function insert(value) {
      // Do the normal BST insert.
      _get(AvlTree.prototype.__proto__ || Object.getPrototypeOf(AvlTree.prototype), 'insert', this).call(this, value);

      // Let's move up to the root and check balance factors along the way.
      var currentNode = this.root.find(value);
      while (currentNode) {
        this.balance(currentNode);
        currentNode = currentNode.parent;
      }
    }

    /**
     * @param {*} value
     * @return {boolean}
     */

  }, {
    key: 'remove',
    value: function remove(value) {
      // Do standard BST removal.
      _get(AvlTree.prototype.__proto__ || Object.getPrototypeOf(AvlTree.prototype), 'remove', this).call(this, value);

      // Balance the tree starting from the root node.
      this.balance(this.root);
    }

    /**
     * @param {BinarySearchTreeNode} node
     */

  }, {
    key: 'balance',
    value: function balance(node) {
      // If balance factor is not OK then try to balance the node.
      if (node.balanceFactor > 1) {
        // Left rotation.
        if (node.left.balanceFactor > 0) {
          // Left-Left rotation
          this.rotateLeftLeft(node);
        } else if (node.left.balanceFactor < 0) {
          // Left-Right rotation.
          this.rotateLeftRight(node);
        }
      } else if (node.balanceFactor < -1) {
        // Right rotation.
        if (node.right.balanceFactor < 0) {
          // Right-Right rotation
          this.rotateRightRight(node);
        } else if (node.right.balanceFactor > 0) {
          // Right-Left rotation.
          this.rotateRightLeft(node);
        }
      }
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */

  }, {
    key: 'rotateLeftLeft',
    value: function rotateLeftLeft(rootNode) {
      // Detach left node from root node.
      var leftNode = rootNode.left;
      rootNode.setLeft(null);

      // Make left node to be a child of rootNode's parent.
      if (rootNode.parent) {
        rootNode.parent.setLeft(leftNode);
      } else if (rootNode === this.root) {
        // If root node is root then make left node to be a new root.
        this.root = leftNode;
      }

      // If left node has a right child then detach it and
      // attach it as a left child for rootNode.
      if (leftNode.right) {
        rootNode.setLeft(leftNode.right);
      }

      // Attach rootNode to the right of leftNode.
      leftNode.setRight(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */

  }, {
    key: 'rotateLeftRight',
    value: function rotateLeftRight(rootNode) {
      // Detach left node from rootNode since it is going to be replaced.
      var leftNode = rootNode.left;
      rootNode.setLeft(null);

      // Detach right node from leftNode.
      var leftRightNode = leftNode.right;
      leftNode.setRight(null);

      // Preserve leftRightNode's left subtree.
      if (leftRightNode.left) {
        leftNode.setRight(leftRightNode.left);
        leftRightNode.setLeft(null);
      }

      // Attach leftRightNode to the rootNode.
      rootNode.setLeft(leftRightNode);

      // Attach leftNode as left node for leftRight node.
      leftRightNode.setLeft(leftNode);

      // Do left-left rotation.
      this.rotateLeftLeft(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */

  }, {
    key: 'rotateRightLeft',
    value: function rotateRightLeft(rootNode) {
      // Detach right node from rootNode since it is going to be replaced.
      var rightNode = rootNode.right;
      rootNode.setRight(null);

      // Detach left node from rightNode.
      var rightLeftNode = rightNode.left;
      rightNode.setLeft(null);

      if (rightLeftNode.right) {
        rightNode.setLeft(rightLeftNode.right);
        rightLeftNode.setRight(null);
      }

      // Attach rightLeftNode to the rootNode.
      rootNode.setRight(rightLeftNode);

      // Attach rightNode as right node for rightLeft node.
      rightLeftNode.setRight(rightNode);

      // Do right-right rotation.
      this.rotateRightRight(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */

  }, {
    key: 'rotateRightRight',
    value: function rotateRightRight(rootNode) {
      // Detach right node from root node.
      var rightNode = rootNode.right;
      rootNode.setRight(null);

      // Make right node to be a child of rootNode's parent.
      if (rootNode.parent) {
        rootNode.parent.setRight(rightNode);
      } else if (rootNode === this.root) {
        // If root node is root then make right node to be a new root.
        this.root = rightNode;
      }

      // If right node has a left child then detach it and
      // attach it as a right child for rootNode.
      if (rightNode.left) {
        rootNode.setRight(rightNode.left);
      }

      // Attach rootNode to the left of rightNode.
      rightNode.setLeft(rootNode);
    }
  }]);

  return AvlTree;
}(_BinarySearchTree3.default);

exports.default = AvlTree;