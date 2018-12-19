"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineWithoutRepetitions;
/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
function combineWithoutRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map(function (comboOption) {
      return [comboOption];
    });
  }

  // Init combinations array.
  var combos = [];

  // Eliminate characters one by one and concatenate them to
  // combinations of smaller lengths.
  comboOptions.forEach(function (currentOption, optionIndex) {
    var smallerCombos = combineWithoutRepetitions(comboOptions.slice(optionIndex + 1), comboLength - 1);

    smallerCombos.forEach(function (smallerCombo) {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}