'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisjointSetItem = require('./DisjointSetItem');

var _DisjointSetItem2 = _interopRequireDefault(_DisjointSetItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisjointSet = function () {
  /**
   * @param {function(value: *)} [keyCallback]
   */
  function DisjointSet(keyCallback) {
    _classCallCheck(this, DisjointSet);

    this.keyCallback = keyCallback;
    this.items = {};
  }

  /**
   * @param {*} itemValue
   * @return {DisjointSet}
   */


  _createClass(DisjointSet, [{
    key: 'makeSet',
    value: function makeSet(itemValue) {
      var disjointSetItem = new _DisjointSetItem2.default(itemValue, this.keyCallback);

      if (!this.items[disjointSetItem.getKey()]) {
        // Add new item only in case if it not presented yet.
        this.items[disjointSetItem.getKey()] = disjointSetItem;
      }

      return this;
    }

    /**
     * Find set representation node.
     *
     * @param {*} itemValue
     * @return {(string|null)}
     */

  }, {
    key: 'find',
    value: function find(itemValue) {
      var templateDisjointItem = new _DisjointSetItem2.default(itemValue, this.keyCallback);

      // Try to find item itself;
      var requiredDisjointItem = this.items[templateDisjointItem.getKey()];

      if (!requiredDisjointItem) {
        return null;
      }

      return requiredDisjointItem.getRoot().getKey();
    }

    /**
     * Union by rank.
     *
     * @param {*} valueA
     * @param {*} valueB
     * @return {DisjointSet}
     */

  }, {
    key: 'union',
    value: function union(valueA, valueB) {
      var rootKeyA = this.find(valueA);
      var rootKeyB = this.find(valueB);

      if (rootKeyA === null || rootKeyB === null) {
        throw new Error('One or two values are not in sets');
      }

      if (rootKeyA === rootKeyB) {
        // In case if both elements are already in the same set then just return its key.
        return this;
      }

      var rootA = this.items[rootKeyA];
      var rootB = this.items[rootKeyB];

      if (rootA.getRank() < rootB.getRank()) {
        // If rootB's tree is bigger then make rootB to be a new root.
        rootB.addChild(rootA);

        return this;
      }

      // If rootA's tree is bigger then make rootA to be a new root.
      rootA.addChild(rootB);

      return this;
    }

    /**
     * @param {*} valueA
     * @param {*} valueB
     * @return {boolean}
     */

  }, {
    key: 'inSameSet',
    value: function inSameSet(valueA, valueB) {
      var rootKeyA = this.find(valueA);
      var rootKeyB = this.find(valueB);

      if (rootKeyA === null || rootKeyB === null) {
        throw new Error('One or two values are not in sets');
      }

      return rootKeyA === rootKeyB;
    }
  }]);

  return DisjointSet;
}();

exports.default = DisjointSet;