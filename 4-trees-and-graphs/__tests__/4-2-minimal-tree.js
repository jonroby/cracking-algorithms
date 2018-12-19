const BinarySearchTree = require("../../javascript-algorithms/lib/data-structures/tree/binary-search-tree/BinarySearchTree")
  .default;

const createMinimalBST = require("../4-2-minimal-tree");

describe("createMinimalBST", () => {
  test("creates tree out of array", () => {
    let arr = [1, 3, 4, 5, 7, 9, 10];
    let bst = new BinarySearchTree();
    let result = createMinimalBST(arr, bst);
    let resultValues = result
      .toString()
      .split(",")
      .filter(i => i)
      .map(i => Number(i));
    expect(resultValues).toEqual(arr);
  });
});
