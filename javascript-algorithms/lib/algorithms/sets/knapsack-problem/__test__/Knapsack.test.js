'use strict';

var _Knapsack = require('../Knapsack');

var _Knapsack2 = _interopRequireDefault(_Knapsack);

var _KnapsackItem = require('../KnapsackItem');

var _KnapsackItem2 = _interopRequireDefault(_KnapsackItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Knapsack', function () {
  it('should solve 0/1 knapsack problem', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 1, weight: 1 }), new _KnapsackItem2.default({ value: 4, weight: 3 }), new _KnapsackItem2.default({ value: 5, weight: 4 }), new _KnapsackItem2.default({ value: 7, weight: 5 })];

    var maxKnapsackWeight = 7;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(9);
    expect(knapsack.totalWeight).toBe(7);
    expect(knapsack.selectedItems.length).toBe(2);
    expect(knapsack.selectedItems[0].toString()).toBe('v5 w4 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v4 w3 x 1');
  });

  it('should solve 0/1 knapsack problem regardless of items order', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 5, weight: 4 }), new _KnapsackItem2.default({ value: 1, weight: 1 }), new _KnapsackItem2.default({ value: 7, weight: 5 }), new _KnapsackItem2.default({ value: 4, weight: 3 })];

    var maxKnapsackWeight = 7;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(9);
    expect(knapsack.totalWeight).toBe(7);
    expect(knapsack.selectedItems.length).toBe(2);
    expect(knapsack.selectedItems[0].toString()).toBe('v5 w4 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v4 w3 x 1');
  });

  it('should solve 0/1 knapsack problem with impossible items set', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 5, weight: 40 }), new _KnapsackItem2.default({ value: 1, weight: 10 }), new _KnapsackItem2.default({ value: 7, weight: 50 }), new _KnapsackItem2.default({ value: 4, weight: 30 })];

    var maxKnapsackWeight = 7;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(0);
    expect(knapsack.totalWeight).toBe(0);
    expect(knapsack.selectedItems.length).toBe(0);
  });

  it('should solve 0/1 knapsack problem with all equal weights', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 5, weight: 1 }), new _KnapsackItem2.default({ value: 1, weight: 1 }), new _KnapsackItem2.default({ value: 7, weight: 1 }), new _KnapsackItem2.default({ value: 4, weight: 1 }), new _KnapsackItem2.default({ value: 4, weight: 1 }), new _KnapsackItem2.default({ value: 4, weight: 1 })];

    var maxKnapsackWeight = 3;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveZeroOneKnapsackProblem();

    expect(knapsack.totalValue).toBe(16);
    expect(knapsack.totalWeight).toBe(3);
    expect(knapsack.selectedItems.length).toBe(3);
    expect(knapsack.selectedItems[0].toString()).toBe('v4 w1 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v5 w1 x 1');
    expect(knapsack.selectedItems[2].toString()).toBe('v7 w1 x 1');
  });

  it('should solve unbound knapsack problem', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 84, weight: 7 }), // v/w ratio is 12
    new _KnapsackItem2.default({ value: 5, weight: 2 }), // v/w ratio is 2.5
    new _KnapsackItem2.default({ value: 12, weight: 3 }), // v/w ratio is 4
    new _KnapsackItem2.default({ value: 10, weight: 1 }), // v/w ratio is 10
    new _KnapsackItem2.default({ value: 20, weight: 2 })];

    var maxKnapsackWeight = 15;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveUnboundedKnapsackProblem();

    expect(knapsack.totalValue).toBe(84 + 20 + 12 + 10 + 5);
    expect(knapsack.totalWeight).toBe(15);
    expect(knapsack.selectedItems.length).toBe(5);
    expect(knapsack.selectedItems[0].toString()).toBe('v84 w7 x 1');
    expect(knapsack.selectedItems[1].toString()).toBe('v20 w2 x 1');
    expect(knapsack.selectedItems[2].toString()).toBe('v10 w1 x 1');
    expect(knapsack.selectedItems[3].toString()).toBe('v12 w3 x 1');
    expect(knapsack.selectedItems[4].toString()).toBe('v5 w2 x 1');
  });

  it('should solve unbound knapsack problem with items in stock', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 84, weight: 7, itemsInStock: 3 }), // v/w ratio is 12
    new _KnapsackItem2.default({ value: 5, weight: 2, itemsInStock: 2 }), // v/w ratio is 2.5
    new _KnapsackItem2.default({ value: 12, weight: 3, itemsInStock: 1 }), // v/w ratio is 4
    new _KnapsackItem2.default({ value: 10, weight: 1, itemsInStock: 6 }), // v/w ratio is 10
    new _KnapsackItem2.default({ value: 20, weight: 2, itemsInStock: 8 })];

    var maxKnapsackWeight = 17;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveUnboundedKnapsackProblem();

    expect(knapsack.totalValue).toBe(84 + 84 + 20 + 10);
    expect(knapsack.totalWeight).toBe(17);
    expect(knapsack.selectedItems.length).toBe(3);
    expect(knapsack.selectedItems[0].toString()).toBe('v84 w7 x 2');
    expect(knapsack.selectedItems[1].toString()).toBe('v20 w2 x 1');
    expect(knapsack.selectedItems[2].toString()).toBe('v10 w1 x 1');
  });

  it('should solve unbound knapsack problem with items in stock and max weight more than sum of all items', function () {
    var possibleKnapsackItems = [new _KnapsackItem2.default({ value: 84, weight: 7, itemsInStock: 3 }), // v/w ratio is 12
    new _KnapsackItem2.default({ value: 5, weight: 2, itemsInStock: 2 }), // v/w ratio is 2.5
    new _KnapsackItem2.default({ value: 12, weight: 3, itemsInStock: 1 }), // v/w ratio is 4
    new _KnapsackItem2.default({ value: 10, weight: 1, itemsInStock: 6 }), // v/w ratio is 10
    new _KnapsackItem2.default({ value: 20, weight: 2, itemsInStock: 8 })];

    var maxKnapsackWeight = 60;

    var knapsack = new _Knapsack2.default(possibleKnapsackItems, maxKnapsackWeight);

    knapsack.solveUnboundedKnapsackProblem();

    expect(knapsack.totalValue).toBe(3 * 84 + 2 * 5 + 1 * 12 + 6 * 10 + 8 * 20);
    expect(knapsack.totalWeight).toBe(3 * 7 + 2 * 2 + 1 * 3 + 6 * 1 + 8 * 2);
    expect(knapsack.selectedItems.length).toBe(5);
    expect(knapsack.selectedItems[0].toString()).toBe('v84 w7 x 3');
    expect(knapsack.selectedItems[1].toString()).toBe('v20 w2 x 8');
    expect(knapsack.selectedItems[2].toString()).toBe('v10 w1 x 6');
    expect(knapsack.selectedItems[3].toString()).toBe('v12 w3 x 1');
    expect(knapsack.selectedItems[4].toString()).toBe('v5 w2 x 2');
  });
});