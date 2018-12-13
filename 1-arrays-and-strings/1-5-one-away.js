const countLetters = require("../helpers/count-letters");
const lowercase = require("../helpers/lowercase");

// 1-5 There are three types of edits that can be performed on strings: insert
// a character, remove a character, or replace a character. Given two strings
// write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple   -> true
// pales, pale -> true
// pale, bale  -> true
// pale, bake  -> false

// Original solution involved using a hash table like previous solutions.
// However, a O(1) space solution is possible. This solution follows one of
// those given in the book.

// T: O(n)
// S: O(1)
function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return replaceOne(str1, str2);
  } else if (str1.length > str2.length) {
    return addOne(str1, str2);
  } else if (str1.length < str2.length) {
    return addOne(str2, str1);
  }
}

function replaceOne(str1, str2) {
  let replacements = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      replacements = replacements + 1;
      if (replacements > 1) return false;
    }
  }

  return true;
}

function addOne(str1, str2) {
  let additions = 0;
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      additions = additions + 1;
      if (additions > 1) return false;
      i += 1;
    } else {
      i += 1;
      j += 1;
    }
  }
  return true;
}

module.exports = oneAway;
