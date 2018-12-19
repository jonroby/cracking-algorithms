'use strict';

var _permutateWithoutRepetitions = require('../permutateWithoutRepetitions');

var _permutateWithoutRepetitions2 = _interopRequireDefault(_permutateWithoutRepetitions);

var _factorial = require('../../../math/factorial/factorial');

var _factorial2 = _interopRequireDefault(_factorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('permutateWithoutRepetitions', function () {
  it('should permutate string', function () {
    var permutations1 = (0, _permutateWithoutRepetitions2.default)(['A']);
    expect(permutations1).toEqual([['A']]);

    var permutations2 = (0, _permutateWithoutRepetitions2.default)(['A', 'B']);
    expect(permutations2.length).toBe(2);
    expect(permutations2).toEqual([['A', 'B'], ['B', 'A']]);

    var permutations6 = (0, _permutateWithoutRepetitions2.default)(['A', 'A']);
    expect(permutations6.length).toBe(2);
    expect(permutations6).toEqual([['A', 'A'], ['A', 'A']]);

    var permutations3 = (0, _permutateWithoutRepetitions2.default)(['A', 'B', 'C']);
    expect(permutations3.length).toBe((0, _factorial2.default)(3));
    expect(permutations3).toEqual([['A', 'B', 'C'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['A', 'C', 'B'], ['C', 'A', 'B'], ['C', 'B', 'A']]);

    var permutations4 = (0, _permutateWithoutRepetitions2.default)(['A', 'B', 'C', 'D']);
    expect(permutations4.length).toBe((0, _factorial2.default)(4));
    expect(permutations4).toEqual([['A', 'B', 'C', 'D'], ['B', 'A', 'C', 'D'], ['B', 'C', 'A', 'D'], ['B', 'C', 'D', 'A'], ['A', 'C', 'B', 'D'], ['C', 'A', 'B', 'D'], ['C', 'B', 'A', 'D'], ['C', 'B', 'D', 'A'], ['A', 'C', 'D', 'B'], ['C', 'A', 'D', 'B'], ['C', 'D', 'A', 'B'], ['C', 'D', 'B', 'A'], ['A', 'B', 'D', 'C'], ['B', 'A', 'D', 'C'], ['B', 'D', 'A', 'C'], ['B', 'D', 'C', 'A'], ['A', 'D', 'B', 'C'], ['D', 'A', 'B', 'C'], ['D', 'B', 'A', 'C'], ['D', 'B', 'C', 'A'], ['A', 'D', 'C', 'B'], ['D', 'A', 'C', 'B'], ['D', 'C', 'A', 'B'], ['D', 'C', 'B', 'A']]);

    var permutations5 = (0, _permutateWithoutRepetitions2.default)(['A', 'B', 'C', 'D', 'E', 'F']);
    expect(permutations5.length).toBe((0, _factorial2.default)(6));
  });
});