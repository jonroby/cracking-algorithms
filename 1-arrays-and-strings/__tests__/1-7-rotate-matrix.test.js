const rotateMatrix = require("../1-7-rotate-matrix");

describe("rotateMatrix", () => {
  test("handles 2x2", () => {
    let matrix = [[1, 2], [3, 4]];
    let result = rotateMatrix(matrix);
    let expected = [[3, 1], [4, 2]];
    expect(result).toEqual(expected);
  });

  test("handles 3x3", () => {
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    let result = rotateMatrix(matrix);
    let expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    expect(result).toEqual(expected);
  });

  test("handles 4x4", () => {
    let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    let result = rotateMatrix(matrix);
    let expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];
    expect(result).toEqual(expected);
  });

  test("handles 5x5", () => {
    let matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    let result = rotateMatrix(matrix);
    [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25];

    let expected = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]
    ];
    expect(result).toEqual(expected);
  });
});
