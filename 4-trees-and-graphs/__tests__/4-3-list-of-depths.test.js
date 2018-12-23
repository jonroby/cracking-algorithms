const BinarySearchTree = require("../../javascript-algorithms/lib/data-structures/tree/binary-search-tree/BinarySearchTree")
  .default;

const listOfDepths = require("../4-3-list-of-depths");

describe("listOfDepths", () => {
  test("creates tree out of array", () => {
    let arr = [5, 3, 7, 2, 4, 6, 8];
    let tree = new BinarySearchTree();
    arr.forEach(i => tree.insert(i));
    let result = listOfDepths(tree.root, 0, []);
    // let result = tree
    //   .toString()
    //   .split(",")
    //   .filter(i => i)
    //   .map(i => Number(i));
    expect(result).toEqual([[5], [3, 7], [2, 4, 6, 8]]);
  });
});
