const urlify = require('../1-3-urlify');

describe("urlify", () => {
  test("replaces all spaces with %20", () => {
    const result = urlify(['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' '], 13);
    const expected = ['M', 'r', '%', '2', '0', 'J', 'o', 'h', 'n', '%', '2', '0', 'S', 'm', 'i', 't', 'h'];
    expect(result).toEqual(expected);
  });

  test("replaces all spaces with %20", () => {
    const result = urlify(['A', ' ', 'B', 'C', ' ', 'D', ' ', 'E', ' ', ' ', ' ', ' ', ' ', ' '], 8);
    const expected = ['A', '%', '2', '0', 'B', 'C', '%', '2', '0', 'D', '%', '2', '0', 'E'];
    expect(result).toEqual(expected);
  });
});
