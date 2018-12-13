const checkPermutation = require('../1-2-check-permutation');

describe("checkPermutation", () => {
  test("returns true if s1 is permutation of s2", () => {
    const result = checkPermutation("abcd", "cadb");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false if s1 is not a permutation of s2", () => {
    const result = checkPermutation("abcd", "bcae");
    const expected = false;
    expect(result).toEqual(expected);
  });
});


