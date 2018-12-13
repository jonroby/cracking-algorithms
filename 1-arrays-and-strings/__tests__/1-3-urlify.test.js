const urlify = require('../1-3-urlify');

describe("urlify", () => {
  test("replaces all spaces with %20", () => {
    const result = urlify(['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' '], 13);
    const expected = ['M', 'r', '%', '2', '0', 'J', 'o', 'h', 'n', '%', '2', '0', 'S', 'm', 'i', 't', 'h'];
    expect(result).toEqual(expected);
  });
});
