const stringCompression = require("../1-6-string-compression");

describe("stringCompression", () => {
  test("returns compressed string", () => {
    const result = stringCompression("aabcccccaaa");
    const expected = "a2b1c5a3";
    expect(result).toEqual(expected);
  });

  test("returns original string if compressed string is longer", () => {
    const result = stringCompression("abccddd", "a1b1c2d3");
    const expected = "abccddd";
    expect(result).toEqual(expected);
  });
});
