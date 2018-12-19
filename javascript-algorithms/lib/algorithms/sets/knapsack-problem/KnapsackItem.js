"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KnapsackItem = function () {
  /**
   * @param {Object} itemSettings - knapsack item settings,
   * @param {number} itemSettings.value - value of the item.
   * @param {number} itemSettings.weight - weight of the item.
   * @param {number} itemSettings.itemsInStock - how many items are available to be added.
   */
  function KnapsackItem(_ref) {
    var value = _ref.value,
        weight = _ref.weight,
        _ref$itemsInStock = _ref.itemsInStock,
        itemsInStock = _ref$itemsInStock === undefined ? 1 : _ref$itemsInStock;

    _classCallCheck(this, KnapsackItem);

    this.value = value;
    this.weight = weight;
    this.itemsInStock = itemsInStock;
    // Actual number of items that is going to be added to knapsack.
    this.quantity = 1;
  }

  _createClass(KnapsackItem, [{
    key: "toString",
    value: function toString() {
      return "v" + this.value + " w" + this.weight + " x " + this.quantity;
    }
  }, {
    key: "totalValue",
    get: function get() {
      return this.value * this.quantity;
    }
  }, {
    key: "totalWeight",
    get: function get() {
      return this.weight * this.quantity;
    }

    // This coefficient shows how valuable the 1 unit of weight is
    // for current item.

  }, {
    key: "valuePerWeightRatio",
    get: function get() {
      return this.value / this.weight;
    }
  }]);

  return KnapsackItem;
}();

exports.default = KnapsackItem;