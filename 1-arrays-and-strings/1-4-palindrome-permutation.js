const countLetters = require("../helpers/count-letters");
const lowercase = require("../helpers/lowercase");

// 1-4 Given a string, write a function to check if it is a permutation of a
// palindrome. A palindrome is a word or phrase that is the same forwards and
// backwards. A permutation is a rearrangement of letters. The palindrome does
// not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco cta", etc.)

// T: O(n)
// S: O(n)
function palindromePermutation(str) {
  if (str.length === 0 || str.length === 1) return true;

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      arr.push(lowercase(str[i]));
    }
  }

  let odd = arr.length % 2 === 1 ? 1 : 0;
  let letterCount = countLetters(arr);
  const keys = Object.keys(letterCount);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (letterCount[key] % 2 === 1) {
      odd = odd - 1;
      if (odd < 0) return false;
    }
  }

  return true;
}

// TODO: Implement solution #3 in the book, which uses bit vectors.

module.exports = palindromePermutation;
