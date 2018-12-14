const zeroMatrix = require("../1-8-zero-matrix");

describe("zeroMatrix", () => {
  test("zeroes out column and row", () => {
    let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 0, 15, 16]];
    let result = zeroMatrix(matrix);
    let expected = [[1, 0, 3, 4], [5, 0, 7, 8], [9, 0, 11, 12], [0, 0, 0, 0]];
    expect(result).toEqual(expected);
    expect(result).toEqual(expected);
  });

  test("zeroes out multiple columns and rows", () => {
    let matrix = [[1, 2, 3, 4], [5, 6, 0, 8], [9, 10, 11, 12], [13, 0, 15, 16]];
    let result = zeroMatrix(matrix);
    let expected = [[1, 0, 0, 4], [0, 0, 0, 0], [9, 0, 0, 12], [0, 0, 0, 0]];
    expect(result).toEqual(expected);
    expect(result).toEqual(expected);
  });
});
