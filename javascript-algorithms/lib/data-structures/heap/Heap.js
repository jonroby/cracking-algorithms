'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Comparator = require('../../utils/comparator/Comparator');

var _Comparator2 = _interopRequireDefault(_Comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Parent class for Min and Max Heaps.
 */
var Heap = function () {
  /**
   * @constructs Heap
   * @param {Function} [comparatorFunction]
   */
  function Heap(comparatorFunction) {
    _classCallCheck(this, Heap);

    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }

    // Array representation of the heap.
    this.heapContainer = [];
    this.compare = new _Comparator2.default(comparatorFunction);
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */


  _createClass(Heap, [{
    key: 'getLeftChildIndex',
    value: function getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */

  }, {
    key: 'getRightChildIndex',
    value: function getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }

    /**
     * @param {number} childIndex
     * @return {number}
     */

  }, {
    key: 'getParentIndex',
    value: function getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     */

  }, {
    key: 'hasParent',
    value: function hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */

  }, {
    key: 'hasLeftChild',
    value: function hasLeftChild(parentIndex) {
      return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */

  }, {
    key: 'hasRightChild',
    value: function hasRightChild(parentIndex) {
      return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */

  }, {
    key: 'leftChild',
    value: function leftChild(parentIndex) {
      return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */

  }, {
    key: 'rightChild',
    value: function rightChild(parentIndex) {
      return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    /**
     * @param {number} childIndex
     * @return {*}
     */

  }, {
    key: 'parent',
    value: function parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */

  }, {
    key: 'swap',
    value: function swap(indexOne, indexTwo) {
      var tmp = this.heapContainer[indexTwo];
      this.heapContainer[indexTwo] = this.heapContainer[indexOne];
      this.heapContainer[indexOne] = tmp;
    }

    /**
     * @return {*}
     */

  }, {
    key: 'peek',
    value: function peek() {
      if (this.heapContainer.length === 0) {
        return null;
      }

      return this.heapContainer[0];
    }

    /**
     * @return {*}
     */

  }, {
    key: 'poll',
    value: function poll() {
      if (this.heapContainer.length === 0) {
        return null;
      }

      if (this.heapContainer.length === 1) {
        return this.heapContainer.pop();
      }

      var item = this.heapContainer[0];

      // Move the last element from the end to the head.
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();

      return item;
    }

    /**
     * @param {*} item
     * @return {Heap}
     */

  }, {
    key: 'add',
    value: function add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Heap}
     */

  }, {
    key: 'remove',
    value: function remove(item) {
      var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.compare;

      // Find number of items to remove.
      var numberOfItemsToRemove = this.find(item, comparator).length;

      for (var iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
        // We need to find item index to remove each time after removal since
        // indices are being changed after each heapify process.
        var indexToRemove = this.find(item, comparator).pop();

        // If we need to remove last child in the heap then just remove it.
        // There is no need to heapify the heap afterwards.
        if (indexToRemove === this.heapContainer.length - 1) {
          this.heapContainer.pop();
        } else {
          // Move last element in heap to the vacant (removed) position.
          this.heapContainer[indexToRemove] = this.heapContainer.pop();

          // Get parent.
          var parentItem = this.parent(indexToRemove);

          // If there is no parent or parent is in correct order with the node
          // we're going to delete then heapify down. Otherwise heapify up.
          if (this.hasLeftChild(indexToRemove) && (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))) {
            this.heapifyDown(indexToRemove);
          } else {
            this.heapifyUp(indexToRemove);
          }
        }
      }

      return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Number[]}
     */

  }, {
    key: 'find',
    value: function find(item) {
      var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.compare;

      var foundItemIndices = [];

      for (var itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
        if (comparator.equal(item, this.heapContainer[itemIndex])) {
          foundItemIndices.push(itemIndex);
        }
      }

      return foundItemIndices;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !this.heapContainer.length;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.heapContainer.toString();
    }

    /**
     * @param {number} [customStartIndex]
     */

  }, {
    key: 'heapifyUp',
    value: function heapifyUp(customStartIndex) {
      // Take the last element (last in array or the bottom left in a tree)
      // in the heap container and lift it up until it is in the correct
      // order with respect to its parent element.
      var currentIndex = customStartIndex || this.heapContainer.length - 1;

      while (this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }

    /**
     * @param {number} [customStartIndex]
     */

  }, {
    key: 'heapifyDown',
    value: function heapifyDown() {
      var customStartIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      // Compare the parent element to its children and swap parent with the appropriate
      // child (smallest child for MinHeap, largest child for MaxHeap).
      // Do the same for next children after swap.
      var currentIndex = customStartIndex;
      var nextIndex = null;

      while (this.hasLeftChild(currentIndex)) {
        if (this.hasRightChild(currentIndex) && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }

        if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
          break;
        }

        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }

    /**
     * Checks if pair of heap elements is in correct order.
     * For MinHeap the first element must be always smaller or equal.
     * For MaxHeap the first element must be always bigger or equal.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    /* istanbul ignore next */

  }, {
    key: 'pairIsInCorrectOrder',
    value: function pairIsInCorrectOrder(firstElement, secondElement) {
      throw new Error('\n      You have to implement heap pair comparision method\n      for ' + firstElement + ' and ' + secondElement + ' values.\n    ');
    }
  }]);

  return Heap;
}();

exports.default = Heap;