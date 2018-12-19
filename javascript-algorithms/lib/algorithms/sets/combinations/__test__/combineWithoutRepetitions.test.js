'use strict';

var _combineWithoutRepetitions = require('../combineWithoutRepetitions');

var _combineWithoutRepetitions2 = _interopRequireDefault(_combineWithoutRepetitions);

var _factorial = require('../../../math/factorial/factorial');

var _factorial2 = _interopRequireDefault(_factorial);

var _pascalTriangle = require('../../../math/pascal-triangle/pascalTriangle');

var _pascalTriangle2 = _interopRequireDefault(_pascalTriangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('combineWithoutRepetitions', function () {
  it('should combine string without repetitions', function () {
    expect((0, _combineWithoutRepetitions2.default)(['A', 'B'], 3)).toEqual([]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B'], 1)).toEqual([['A'], ['B']]);

    expect((0, _combineWithoutRepetitions2.default)(['A'], 1)).toEqual([['A']]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B'], 2)).toEqual([['A', 'B']]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B', 'C'], 2)).toEqual([['A', 'B'], ['A', 'C'], ['B', 'C']]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B', 'C'], 3)).toEqual([['A', 'B', 'C']]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B', 'C', 'D'], 3)).toEqual([['A', 'B', 'C'], ['A', 'B', 'D'], ['A', 'C', 'D'], ['B', 'C', 'D']]);

    expect((0, _combineWithoutRepetitions2.default)(['A', 'B', 'C', 'D', 'E'], 3)).toEqual([['A', 'B', 'C'], ['A', 'B', 'D'], ['A', 'B', 'E'], ['A', 'C', 'D'], ['A', 'C', 'E'], ['A', 'D', 'E'], ['B', 'C', 'D'], ['B', 'C', 'E'], ['B', 'D', 'E'], ['C', 'D', 'E']]);

    var combinationOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var combinationSlotsNumber = 4;
    var combinations = (0, _combineWithoutRepetitions2.default)(combinationOptions, combinationSlotsNumber);
    var n = combinationOptions.length;
    var r = combinationSlotsNumber;
    var expectedNumberOfCombinations = (0, _factorial2.default)(n) / ((0, _factorial2.default)(r) * (0, _factorial2.default)(n - r));

    expect(combinations.length).toBe(expectedNumberOfCombinations);

    // This one is just to see one of the way of Pascal's triangle application.
    expect(combinations.length).toBe((0, _pascalTriangle2.default)(n)[r]);
  });
});