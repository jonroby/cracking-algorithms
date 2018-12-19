"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisjointSetItem = function () {
  /**
   * @param {*} value
   * @param {function(value: *)} [keyCallback]
   */
  function DisjointSetItem(value, keyCallback) {
    _classCallCheck(this, DisjointSetItem);

    this.value = value;
    this.keyCallback = keyCallback;
    /** @var {DisjointSetItem} this.parent */
    this.parent = null;
    this.children = {};
  }

  /**
   * @return {*}
   */


  _createClass(DisjointSetItem, [{
    key: "getKey",
    value: function getKey() {
      // Allow user to define custom key generator.
      if (this.keyCallback) {
        return this.keyCallback(this.value);
      }

      // Otherwise use value as a key by default.
      return this.value;
    }

    /**
     * @return {DisjointSetItem}
     */

  }, {
    key: "getRoot",
    value: function getRoot() {
      return this.isRoot() ? this : this.parent.getRoot();
    }

    /**
     * @return {boolean}
     */

  }, {
    key: "isRoot",
    value: function isRoot() {
      return this.parent === null;
    }

    /**
     * Rank basically means the number of all ancestors.
     *
     * @return {number}
     */

  }, {
    key: "getRank",
    value: function getRank() {
      if (this.getChildren().length === 0) {
        return 0;
      }

      var rank = 0;

      /** @var {DisjointSetItem} child */
      this.getChildren().forEach(function (child) {
        // Count child itself.
        rank += 1;

        // Also add all children of current child.
        rank += child.getRank();
      });

      return rank;
    }

    /**
     * @return {DisjointSetItem[]}
     */

  }, {
    key: "getChildren",
    value: function getChildren() {
      return Object.values(this.children);
    }

    /**
     * @param {DisjointSetItem} parentItem
     * @param {boolean} forceSettingParentChild
     * @return {DisjointSetItem}
     */

  }, {
    key: "setParent",
    value: function setParent(parentItem) {
      var forceSettingParentChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.parent = parentItem;
      if (forceSettingParentChild) {
        parentItem.addChild(this);
      }

      return this;
    }

    /**
     * @param {DisjointSetItem} childItem
     * @return {DisjointSetItem}
     */

  }, {
    key: "addChild",
    value: function addChild(childItem) {
      this.children[childItem.getKey()] = childItem;
      childItem.setParent(this, false);

      return this;
    }
  }]);

  return DisjointSetItem;
}();

exports.default = DisjointSetItem;