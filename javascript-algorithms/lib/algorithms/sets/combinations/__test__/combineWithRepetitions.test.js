'use strict';

var _combineWithRepetitions = require('../combineWithRepetitions');

var _combineWithRepetitions2 = _interopRequireDefault(_combineWithRepetitions);

var _factorial = require('../../../math/factorial/factorial');

var _factorial2 = _interopRequireDefault(_factorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('combineWithRepetitions', function () {
  it('should combine string with repetitions', function () {
    expect((0, _combineWithRepetitions2.default)(['A'], 1)).toEqual([['A']]);

    expect((0, _combineWithRepetitions2.default)(['A', 'B'], 1)).toEqual([['A'], ['B']]);

    expect((0, _combineWithRepetitions2.default)(['A', 'B'], 2)).toEqual([['A', 'A'], ['A', 'B'], ['B', 'B']]);

    expect((0, _combineWithRepetitions2.default)(['A', 'B'], 3)).toEqual([['A', 'A', 'A'], ['A', 'A', 'B'], ['A', 'B', 'B'], ['B', 'B', 'B']]);

    expect((0, _combineWithRepetitions2.default)(['A', 'B', 'C'], 2)).toEqual([['A', 'A'], ['A', 'B'], ['A', 'C'], ['B', 'B'], ['B', 'C'], ['C', 'C']]);

    expect((0, _combineWithRepetitions2.default)(['A', 'B', 'C'], 3)).toEqual([['A', 'A', 'A'], ['A', 'A', 'B'], ['A', 'A', 'C'], ['A', 'B', 'B'], ['A', 'B', 'C'], ['A', 'C', 'C'], ['B', 'B', 'B'], ['B', 'B', 'C'], ['B', 'C', 'C'], ['C', 'C', 'C']]);

    var combinationOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var combinationSlotsNumber = 4;
    var combinations = (0, _combineWithRepetitions2.default)(combinationOptions, combinationSlotsNumber);
    var n = combinationOptions.length;
    var r = combinationSlotsNumber;
    var expectedNumberOfCombinations = (0, _factorial2.default)(r + n - 1) / ((0, _factorial2.default)(r) * (0, _factorial2.default)(n - 1));

    expect(combinations.length).toBe(expectedNumberOfCombinations);
  });
});