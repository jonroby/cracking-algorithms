const countLetters = require("../helpers/count-letters");

// 1-2 Given two strings, write a method to decide if one is a permutation of
// the other.

// One possibility is writing a permutation function and simply returning
// str === permutation(str). However, the time complexity of a permutation
// function is high. Instead, build on the idea from  1-1.

// T: O(n)
// S: O(n)
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  let letterCount1 = countLetters(str1);
  let letterCount2 = countLetters(str2);

  let keys = Object.keys(letterCount1);
  for (let i = 0; i < keys.length; i++) {
    if (letterCount1[keys[i]] !== letterCount2[keys[i]]) return false;
  }

  return true;
}

module.exports = checkPermutation;

// Lessons
// - Don't try to list all permutations. This takes time factorial.
