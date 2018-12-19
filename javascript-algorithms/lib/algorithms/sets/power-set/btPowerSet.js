"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = btPowerSet;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*[]} originalSet - Original set of elements we're forming power-set of.
 * @param {*[][]} allSubsets - All subsets that have been formed so far.
 * @param {*[]} currentSubSet - Current subset that we're forming at the moment.
 * @param {number} startAt - The position of in original set we're starting to form current subset.
 * @return {*[][]} - All subsets of original set.
 */
function btPowerSetRecursive(originalSet) {
  var allSubsets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[]];
  var currentSubSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var startAt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  // Let's iterate over originalSet elements that may be added to the subset
  // without having duplicates. The value of startAt prevents adding the duplicates.
  for (var position = startAt; position < originalSet.length; position += 1) {
    // Let's push current element to the subset
    currentSubSet.push(originalSet[position]);

    // Current subset is already valid so let's memorize it.
    // We do array destruction here to save the clone of the currentSubSet.
    // We need to save a clone since the original currentSubSet is going to be
    // mutated in further recursive calls.
    allSubsets.push([].concat(_toConsumableArray(currentSubSet)));

    // Let's try to generate all other subsets for the current subset.
    // We're increasing the position by one to avoid duplicates in subset.
    btPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1);

    // BACKTRACK. Exclude last element from the subset and try the next valid one.
    currentSubSet.pop();
  }

  // Return all subsets of a set.
  return allSubsets;
}

/**
 * Find power-set of a set using BACKTRACKING approach.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
function btPowerSet(originalSet) {
  return btPowerSetRecursive(originalSet);
}