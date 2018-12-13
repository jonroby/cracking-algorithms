const insertionSort = require("../helpers/insertion-sort");

// 1-1-1 Implement an algorithm to determine if a string has all unique characters.

// T: O(n)
// S: O(n)
const isUnique1 = str => {
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letters[letter]) {
      return false;
    } else {
      letters[letter] = true;
    }
  }

  return true;
};

// 1-1-2 What if you can't use additional data structures?

// I don't believe this is possible with JavaScript since replacing a letter in
// a string doesn't happen as it does with arrays. So to simulate this, isUnique2
// takes a string array (['a', 'b', 'c']), rather than a standard string.

// It can be sorted with any sort that takes constant space. I've chosen
// insertion sort. Then, loop and if any s[i] === s[i-1] return false.
// Otherwise, return true.

// T: O(n^2)
// S: O(1)
const isUnique2 = strArr => {
  const sorted = insertionSort(strArr);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) return false;
  }

  return true;
};

module.exports = { isUnique1, isUnique2 };
