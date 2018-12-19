'use strict';

var _KnapsackItem = require('../KnapsackItem');

var _KnapsackItem2 = _interopRequireDefault(_KnapsackItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('KnapsackItem', function () {
  it('should create knapsack item and count its total weight and value', function () {
    var knapsackItem = new _KnapsackItem2.default({ value: 3, weight: 2 });

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(1);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 1');
    expect(knapsackItem.totalValue).toBe(3);
    expect(knapsackItem.totalWeight).toBe(2);

    knapsackItem.quantity = 0;

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(0);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 0');
    expect(knapsackItem.totalValue).toBe(0);
    expect(knapsackItem.totalWeight).toBe(0);

    knapsackItem.quantity = 2;

    expect(knapsackItem.value).toBe(3);
    expect(knapsackItem.weight).toBe(2);
    expect(knapsackItem.quantity).toBe(2);
    expect(knapsackItem.valuePerWeightRatio).toBe(1.5);
    expect(knapsackItem.toString()).toBe('v3 w2 x 2');
    expect(knapsackItem.totalValue).toBe(6);
    expect(knapsackItem.totalWeight).toBe(4);
  });
});