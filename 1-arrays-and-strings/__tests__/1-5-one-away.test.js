const oneAway = require("../1-5-one-away");

describe("oneAway", () => {
  test("returns true when strings are pale and ple", () => {
    const result = oneAway("pale", "ple");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns true when strings are pales and pale", () => {
    const result = oneAway("pales", "pale");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false when strings are pales and pala", () => {
    const result = oneAway("pales", "pala");
    const expected = false;
    expect(result).toEqual(expected);
  });

  test("returns false when strings are pale and pla", () => {
    const result = oneAway("pales", "pala");
    const expected = false;
    expect(result).toEqual(expected);
  });

  test("returns true when strings are bale and pale", () => {
    const result = oneAway("bale", "pale");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false when strings are pale and bake", () => {
    const result = oneAway("pale", "bake");
    const expected = false;
    expect(result).toEqual(expected);
  });
});
