"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = integerPartition;
/**
 * @param {number} number
 * @return {number}
 */
function integerPartition(number) {
  // Create partition matrix for solving this task using Dynamic Programming.
  var partitionMatrix = Array(number + 1).fill(null).map(function () {
    return Array(number + 1).fill(null);
  });

  // Fill partition matrix with initial values.

  // Let's fill the first row that represents how many ways we would have
  // to combine the numbers 1, 2, 3, ..., n with number 0. We would have zero
  // ways obviously since with zero number we may form only zero.
  for (var numberIndex = 1; numberIndex <= number; numberIndex += 1) {
    partitionMatrix[0][numberIndex] = 0;
  }

  // Let's fill the first column. It represents the number of ways we can form
  // number zero out of numbers 0, 0 and 1, 0 and 1 and 2, 0 and 1 and 2 and 3, ...
  // Obviously there is only one way we could form number 0
  // and it is with number 0 itself.
  for (var summandIndex = 0; summandIndex <= number; summandIndex += 1) {
    partitionMatrix[summandIndex][0] = 1;
  }

  // Now let's go through other possible options of how we could form number m out of
  // summands 0, 1, ..., m using Dynamic Programming approach.
  for (var _summandIndex = 1; _summandIndex <= number; _summandIndex += 1) {
    for (var _numberIndex = 1; _numberIndex <= number; _numberIndex += 1) {
      if (_summandIndex > _numberIndex) {
        // If summand number is bigger then current number itself then just it won't add
        // any new ways of forming the number. Thus we may just copy the number from row above.
        partitionMatrix[_summandIndex][_numberIndex] = partitionMatrix[_summandIndex - 1][_numberIndex];
      } else {
        /*
         * The number of combinations would equal to number of combinations of forming the same
         * number but WITHOUT current summand number PLUS number of combinations of forming the
         * <current number - current summand> number but WITH current summand.
         *
         * Example:
         * Number of ways to form 5 using summands {0, 1, 2} would equal the SUM of:
         * - number of ways to form 5 using summands {0, 1} (we've excluded summand 2)
         * - number of ways to form 3 (because 5 - 2 = 3) using summands {0, 1, 2}
         * (we've included summand 2)
        */
        var combosWithoutSummand = partitionMatrix[_summandIndex - 1][_numberIndex];
        var combosWithSummand = partitionMatrix[_summandIndex][_numberIndex - _summandIndex];

        partitionMatrix[_summandIndex][_numberIndex] = combosWithoutSummand + combosWithSummand;
      }
    }
  }

  return partitionMatrix[number][number];
}