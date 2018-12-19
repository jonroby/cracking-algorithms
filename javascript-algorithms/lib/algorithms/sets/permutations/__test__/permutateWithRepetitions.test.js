'use strict';

var _permutateWithRepetitions = require('../permutateWithRepetitions');

var _permutateWithRepetitions2 = _interopRequireDefault(_permutateWithRepetitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('permutateWithRepetitions', function () {
  it('should permutate string with repetition', function () {
    var permutations1 = (0, _permutateWithRepetitions2.default)(['A']);
    expect(permutations1).toEqual([['A']]);

    var permutations2 = (0, _permutateWithRepetitions2.default)(['A', 'B']);
    expect(permutations2).toEqual([['A', 'A'], ['A', 'B'], ['B', 'A'], ['B', 'B']]);

    var permutations3 = (0, _permutateWithRepetitions2.default)(['A', 'B', 'C']);
    expect(permutations3).toEqual([['A', 'A', 'A'], ['A', 'A', 'B'], ['A', 'A', 'C'], ['A', 'B', 'A'], ['A', 'B', 'B'], ['A', 'B', 'C'], ['A', 'C', 'A'], ['A', 'C', 'B'], ['A', 'C', 'C'], ['B', 'A', 'A'], ['B', 'A', 'B'], ['B', 'A', 'C'], ['B', 'B', 'A'], ['B', 'B', 'B'], ['B', 'B', 'C'], ['B', 'C', 'A'], ['B', 'C', 'B'], ['B', 'C', 'C'], ['C', 'A', 'A'], ['C', 'A', 'B'], ['C', 'A', 'C'], ['C', 'B', 'A'], ['C', 'B', 'B'], ['C', 'B', 'C'], ['C', 'C', 'A'], ['C', 'C', 'B'], ['C', 'C', 'C']]);

    var permutations4 = (0, _permutateWithRepetitions2.default)(['A', 'B', 'C', 'D']);
    expect(permutations4.length).toBe(4 * 4 * 4 * 4);
  });
});