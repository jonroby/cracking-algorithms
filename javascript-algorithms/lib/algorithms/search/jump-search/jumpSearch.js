'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jumpSearch;

var _Comparator = require('../../../utils/comparator/Comparator');

var _Comparator2 = _interopRequireDefault(_Comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Jump (block) search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */
function jumpSearch(sortedArray, seekElement, comparatorCallback) {
  var comparator = new _Comparator2.default(comparatorCallback);
  var arraySize = sortedArray.length;

  if (!arraySize) {
    // We can't find anything in empty array.
    return -1;
  }

  // Calculate optimal jump size.
  // Total number of comparisons in the worst case will be ((arraySize/jumpSize) + jumpSize - 1).
  // The value of the function ((arraySize/jumpSize) + jumpSize - 1) will be minimum
  // when jumpSize = √array.length.
  var jumpSize = Math.floor(Math.sqrt(arraySize));

  // Find the block where the seekElement belong to.
  var blockStart = 0;
  var blockEnd = jumpSize;
  while (comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
    // Jump to the next block.
    blockStart = blockEnd;
    blockEnd += jumpSize;

    // If our next block is out of array then we couldn't found the element.
    if (blockStart > arraySize) {
      return -1;
    }
  }

  // Do linear search for seekElement in subarray starting from blockStart.
  var currentIndex = blockStart;
  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (comparator.equal(sortedArray[currentIndex], seekElement)) {
      return currentIndex;
    }

    currentIndex += 1;
  }

  return -1;
}