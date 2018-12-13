const { isUnique1, isUnique2 } = require('../1-1-is-unique');

describe("isUnique1", () => {
  test("returns true if all characters are unique", () => {
    const result = isUnique1("abcdefgh");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false if any character is non-unique", () => {
    const result = isUnique1("aabcdefg");
    const expected = false;
    expect(result).toEqual(expected);
  });
});

describe("isUnique2", () => {
  test("returns true if all characters are unique", () => {
    const result = isUnique2(['a', 'b', 'c', 'd']);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false if any character is non-unique", () => {
    const result = isUnique2(['a', 'a', 'b', 'c', 'd']);
    const expected = false;
    expect(result).toEqual(expected);
  });
});
