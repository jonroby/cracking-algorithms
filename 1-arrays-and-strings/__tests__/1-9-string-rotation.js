const stringRotation = require('../1-9-string-rotation');

describe("stringRotation", () => {
  test("returns true if rotation exists", () => {
    const result = stringRotation("erbottlewat", "waterbottle");
    const expected = true;
    expect(result).toEqual(expected);
  });

  test("returns false if rotation doesn't exist", () => {
    const result = stringRotation("erbotlewat", "waterbottle");
    const expected = false;
    expect(result).toEqual(expected);
  });
});
