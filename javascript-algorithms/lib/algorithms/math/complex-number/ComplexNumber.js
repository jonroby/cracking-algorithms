'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radianToDegree = require('../radian/radianToDegree');

var _radianToDegree2 = _interopRequireDefault(_radianToDegree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComplexNumber = function () {
  /**
   * z = re + im * i
   * z = radius * e^(i * phase)
   *
   * @param {number} [re]
   * @param {number} [im]
   */
  function ComplexNumber() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$re = _ref.re,
        re = _ref$re === undefined ? 0 : _ref$re,
        _ref$im = _ref.im,
        im = _ref$im === undefined ? 0 : _ref$im;

    _classCallCheck(this, ComplexNumber);

    this.re = re;
    this.im = im;
  }

  /**
   * @param {ComplexNumber|number} addend
   * @return {ComplexNumber}
   */


  _createClass(ComplexNumber, [{
    key: 'add',
    value: function add(addend) {
      // Make sure we're dealing with complex number.
      var complexAddend = this.toComplexNumber(addend);

      return new ComplexNumber({
        re: this.re + complexAddend.re,
        im: this.im + complexAddend.im
      });
    }

    /**
     * @param {ComplexNumber|number} subtrahend
     * @return {ComplexNumber}
     */

  }, {
    key: 'subtract',
    value: function subtract(subtrahend) {
      // Make sure we're dealing with complex number.
      var complexSubtrahend = this.toComplexNumber(subtrahend);

      return new ComplexNumber({
        re: this.re - complexSubtrahend.re,
        im: this.im - complexSubtrahend.im
      });
    }

    /**
     * @param {ComplexNumber|number} multiplicand
     * @return {ComplexNumber}
     */

  }, {
    key: 'multiply',
    value: function multiply(multiplicand) {
      // Make sure we're dealing with complex number.
      var complexMultiplicand = this.toComplexNumber(multiplicand);

      return new ComplexNumber({
        re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
        im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re
      });
    }

    /**
     * @param {ComplexNumber|number} divider
     * @return {ComplexNumber}
     */

  }, {
    key: 'divide',
    value: function divide(divider) {
      // Make sure we're dealing with complex number.
      var complexDivider = this.toComplexNumber(divider);

      // Get divider conjugate.
      var dividerConjugate = this.conjugate(complexDivider);

      // Multiply dividend by divider's conjugate.
      var finalDivident = this.multiply(dividerConjugate);

      // Calculating final divider using formula (a + bi)(a − bi) = a^2 + b^2
      var finalDivider = Math.pow(complexDivider.re, 2) + Math.pow(complexDivider.im, 2);

      return new ComplexNumber({
        re: finalDivident.re / finalDivider,
        im: finalDivident.im / finalDivider
      });
    }

    /**
     * @param {ComplexNumber|number} number
     */

  }, {
    key: 'conjugate',
    value: function conjugate(number) {
      // Make sure we're dealing with complex number.
      var complexNumber = this.toComplexNumber(number);

      return new ComplexNumber({
        re: complexNumber.re,
        im: -1 * complexNumber.im
      });
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getRadius',
    value: function getRadius() {
      return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    }

    /**
     * @param {boolean} [inRadians]
     * @return {number}
     */

  }, {
    key: 'getPhase',
    value: function getPhase() {
      var inRadians = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

      if (this.re < 0 && this.im > 0) {
        phase = Math.PI - phase;
      } else if (this.re < 0 && this.im < 0) {
        phase = -(Math.PI - phase);
      } else if (this.re > 0 && this.im < 0) {
        phase = -phase;
      } else if (this.re === 0 && this.im > 0) {
        phase = Math.PI / 2;
      } else if (this.re === 0 && this.im < 0) {
        phase = -Math.PI / 2;
      } else if (this.re < 0 && this.im === 0) {
        phase = Math.PI;
      } else if (this.re > 0 && this.im === 0) {
        phase = 0;
      } else if (this.re === 0 && this.im === 0) {
        // More correctly would be to set 'indeterminate'.
        // But just for simplicity reasons let's set zero.
        phase = 0;
      }

      if (!inRadians) {
        phase = (0, _radianToDegree2.default)(phase);
      }

      return phase;
    }

    /**
     * @param {boolean} [inRadians]
     * @return {{radius: number, phase: number}}
     */

  }, {
    key: 'getPolarForm',
    value: function getPolarForm() {
      var inRadians = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return {
        radius: this.getRadius(),
        phase: this.getPhase(inRadians)
      };
    }

    /**
     * Convert real numbers to complex number.
     * In case if complex number is provided then lefts it as is.
     *
     * @param {ComplexNumber|number} number
     * @return {ComplexNumber}
     */

  }, {
    key: 'toComplexNumber',
    value: function toComplexNumber(number) {
      if (number instanceof ComplexNumber) {
        return number;
      }

      return new ComplexNumber({ re: number });
    }
  }]);

  return ComplexNumber;
}();

exports.default = ComplexNumber;