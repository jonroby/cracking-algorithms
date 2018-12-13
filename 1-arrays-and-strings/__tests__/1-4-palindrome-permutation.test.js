const palindromePermutation = require('../1-4-palindrome-permutation');

describe("palindromePermutation", () => {
  test("returns true if string is a palindrome permutation (odd length)", () => {
    const result = palindromePermutation('Tact Coa');
    const expected = true; // "taco cat" "atco cta"
    expect(result).toEqual(expected);
  });

  test("returns true if string is a palindrome permutation (even length)", () => {
    const result = palindromePermutation('aa race car');
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false if string is not a palindrome permutation (odd length)", () => {
    const result = palindromePermutation('Abc abd e');
    const expected = false;
    expect(result).toEqual(expected);
  });

  test("returns false if string is not a palindrome permutation (odd length)", () => {
    const result = palindromePermutation('Abc abd');
    const expected = false;
    expect(result).toEqual(expected);
  });
});
