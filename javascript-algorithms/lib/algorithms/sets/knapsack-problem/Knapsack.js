'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MergeSort = require('../../sorting/merge-sort/MergeSort');

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Knapsack = function () {
  /**
   * @param {KnapsackItem[]} possibleItems
   * @param {number} weightLimit
   */
  function Knapsack(possibleItems, weightLimit) {
    _classCallCheck(this, Knapsack);

    this.selectedItems = [];
    this.weightLimit = weightLimit;
    this.possibleItems = possibleItems;
  }

  _createClass(Knapsack, [{
    key: 'sortPossibleItemsByWeight',
    value: function sortPossibleItemsByWeight() {
      this.possibleItems = new _MergeSort2.default({
        /**
         * @var KnapsackItem itemA
         * @var KnapsackItem itemB
         */
        compareCallback: function compareCallback(itemA, itemB) {
          if (itemA.weight === itemB.weight) {
            return 0;
          }

          return itemA.weight < itemB.weight ? -1 : 1;
        }
      }).sort(this.possibleItems);
    }
  }, {
    key: 'sortPossibleItemsByValue',
    value: function sortPossibleItemsByValue() {
      this.possibleItems = new _MergeSort2.default({
        /**
         * @var KnapsackItem itemA
         * @var KnapsackItem itemB
         */
        compareCallback: function compareCallback(itemA, itemB) {
          if (itemA.value === itemB.value) {
            return 0;
          }

          return itemA.value > itemB.value ? -1 : 1;
        }
      }).sort(this.possibleItems);
    }
  }, {
    key: 'sortPossibleItemsByValuePerWeightRatio',
    value: function sortPossibleItemsByValuePerWeightRatio() {
      this.possibleItems = new _MergeSort2.default({
        /**
         * @var KnapsackItem itemA
         * @var KnapsackItem itemB
         */
        compareCallback: function compareCallback(itemA, itemB) {
          if (itemA.valuePerWeightRatio === itemB.valuePerWeightRatio) {
            return 0;
          }

          return itemA.valuePerWeightRatio > itemB.valuePerWeightRatio ? -1 : 1;
        }
      }).sort(this.possibleItems);
    }

    // Solve 0/1 knapsack problem
    // Dynamic Programming approach.

  }, {
    key: 'solveZeroOneKnapsackProblem',
    value: function solveZeroOneKnapsackProblem() {
      // We do two sorts because in case of equal weights but different values
      // we need to take the most valuable items first.
      this.sortPossibleItemsByValue();
      this.sortPossibleItemsByWeight();

      this.selectedItems = [];

      // Create knapsack values matrix.
      var numberOfRows = this.possibleItems.length;
      var numberOfColumns = this.weightLimit;
      var knapsackMatrix = Array(numberOfRows).fill(null).map(function () {
        return Array(numberOfColumns + 1).fill(null);
      });

      // Fill the first column with zeros since it would mean that there is
      // no items we can add to knapsack in case if weight limitation is zero.
      for (var _itemIndex = 0; _itemIndex < this.possibleItems.length; _itemIndex += 1) {
        knapsackMatrix[_itemIndex][0] = 0;
      }

      // Fill the first row with max possible values we would get by just adding
      // or not adding the first item to the knapsack.
      for (var _weightIndex = 1; _weightIndex <= this.weightLimit; _weightIndex += 1) {
        var _itemIndex2 = 0;
        var itemWeight = this.possibleItems[_itemIndex2].weight;
        var itemValue = this.possibleItems[_itemIndex2].value;
        knapsackMatrix[_itemIndex2][_weightIndex] = itemWeight <= _weightIndex ? itemValue : 0;
      }

      // Go through combinations of how we may add items to knapsack and
      // define what weight/value we would receive using Dynamic Programming
      // approach.
      for (var _itemIndex3 = 1; _itemIndex3 < this.possibleItems.length; _itemIndex3 += 1) {
        for (var _weightIndex2 = 1; _weightIndex2 <= this.weightLimit; _weightIndex2 += 1) {
          var currentItemWeight = this.possibleItems[_itemIndex3].weight;
          var currentItemValue = this.possibleItems[_itemIndex3].value;

          if (currentItemWeight > _weightIndex2) {
            // In case if item's weight is bigger then currently allowed weight
            // then we can't add it to knapsack and the max possible value we can
            // gain at the moment is the max value we got for previous item.
            knapsackMatrix[_itemIndex3][_weightIndex2] = knapsackMatrix[_itemIndex3 - 1][_weightIndex2];
          } else {
            // Else we need to consider the max value we can gain at this point by adding
            // current value or just by keeping the previous item for current weight.
            knapsackMatrix[_itemIndex3][_weightIndex2] = Math.max(currentItemValue + knapsackMatrix[_itemIndex3 - 1][_weightIndex2 - currentItemWeight], knapsackMatrix[_itemIndex3 - 1][_weightIndex2]);
          }
        }
      }

      // Now let's trace back the knapsack matrix to see what items we're going to add
      // to the knapsack.
      var itemIndex = this.possibleItems.length - 1;
      var weightIndex = this.weightLimit;

      while (itemIndex > 0) {
        var currentItem = this.possibleItems[itemIndex];
        var prevItem = this.possibleItems[itemIndex - 1];

        // Check if matrix value came from top (from previous item).
        // In this case this would mean that we need to include previous item
        // to the list of selected items.
        if (knapsackMatrix[itemIndex][weightIndex] && knapsackMatrix[itemIndex][weightIndex] === knapsackMatrix[itemIndex - 1][weightIndex]) {
          // Check if there are several items with the same weight but with the different values.
          // We need to add highest item in the matrix that is possible to get the highest value.
          var prevSumValue = knapsackMatrix[itemIndex - 1][weightIndex];
          var prevPrevSumValue = knapsackMatrix[itemIndex - 2][weightIndex];
          if (!prevSumValue || prevSumValue && prevPrevSumValue !== prevSumValue) {
            this.selectedItems.push(prevItem);
          }
        } else if (knapsackMatrix[itemIndex - 1][weightIndex - currentItem.weight]) {
          this.selectedItems.push(prevItem);
          weightIndex -= currentItem.weight;
        }

        itemIndex -= 1;
      }
    }

    // Solve unbounded knapsack problem.
    // Greedy approach.

  }, {
    key: 'solveUnboundedKnapsackProblem',
    value: function solveUnboundedKnapsackProblem() {
      this.sortPossibleItemsByValue();
      this.sortPossibleItemsByValuePerWeightRatio();

      for (var itemIndex = 0; itemIndex < this.possibleItems.length; itemIndex += 1) {
        if (this.totalWeight < this.weightLimit) {
          var currentItem = this.possibleItems[itemIndex];

          // Detect how much of current items we can push to knapsack.
          var availableWeight = this.weightLimit - this.totalWeight;
          var maxPossibleItemsCount = Math.floor(availableWeight / currentItem.weight);

          if (maxPossibleItemsCount > currentItem.itemsInStock) {
            // If we have more items in stock then it is allowed to add
            // let's add the maximum allowed number of them.
            currentItem.quantity = currentItem.itemsInStock;
          } else if (maxPossibleItemsCount) {
            // In case if we don't have specified number of items in stock
            // let's add only items we have in stock.
            currentItem.quantity = maxPossibleItemsCount;
          }

          this.selectedItems.push(currentItem);
        }
      }
    }
  }, {
    key: 'totalValue',
    get: function get() {
      /** @var {KnapsackItem} item */
      return this.selectedItems.reduce(function (accumulator, item) {
        return accumulator + item.totalValue;
      }, 0);
    }
  }, {
    key: 'totalWeight',
    get: function get() {
      /** @var {KnapsackItem} item */
      return this.selectedItems.reduce(function (accumulator, item) {
        return accumulator + item.totalWeight;
      }, 0);
    }
  }]);

  return Knapsack;
}();

exports.default = Knapsack;