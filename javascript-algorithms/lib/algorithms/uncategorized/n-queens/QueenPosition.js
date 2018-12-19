"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class that represents queen position on the chessboard.
 */
var QueenPosition = function () {
  /**
   * @param {number} rowIndex
   * @param {number} columnIndex
   */
  function QueenPosition(rowIndex, columnIndex) {
    _classCallCheck(this, QueenPosition);

    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }

  /**
   * @return {number}
   */


  _createClass(QueenPosition, [{
    key: "toString",
    value: function toString() {
      return this.rowIndex + "," + this.columnIndex;
    }
  }, {
    key: "leftDiagonal",
    get: function get() {
      // Each position on the same left (\) diagonal has the same difference of
      // rowIndex and columnIndex. This fact may be used to quickly check if two
      // positions (queens) are on the same left diagonal.
      // @see https://youtu.be/xouin83ebxE?t=1m59s
      return this.rowIndex - this.columnIndex;
    }

    /**
     * @return {number}
     */

  }, {
    key: "rightDiagonal",
    get: function get() {
      // Each position on the same right diagonal (/) has the same
      // sum of rowIndex and columnIndex. This fact may be used to quickly
      // check if two positions (queens) are on the same right diagonal.
      // @see https://youtu.be/xouin83ebxE?t=1m59s
      return this.rowIndex + this.columnIndex;
    }
  }]);

  return QueenPosition;
}();

exports.default = QueenPosition;