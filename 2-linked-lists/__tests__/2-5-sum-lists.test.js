const LinkedList = require("../linked-list");
const sumLists = require("../2-5-sum-lists");
const listValues = require("../list-values");

// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912

describe("sumLists", () => {
  test("sum lists", () => {
    let l1 = new LinkedList();
    l1.appendToTail(7);
    l1.appendToTail(1);
    l1.appendToTail(6);

    let l2 = new LinkedList();
    l2.appendToTail(5);
    l2.appendToTail(9);
    l2.appendToTail(2);

    let sum = sumLists(l1, l2);
    let result = listValues(sum);
    const expected = [2, 1, 9];

    expect(result).toEqual(expected);
  });

  test("handles large digits at the end", () => {
    let l1 = new LinkedList();
    l1.appendToTail(9);
    l1.appendToTail(9);

    let l2 = new LinkedList();
    l2.appendToTail(9);
    l2.appendToTail(9);

    let sum = sumLists(l1, l2);
    let result = listValues(sum);
    const expected = [8, 9, 1];

    expect(result).toEqual(expected);
  });

  test("sum lists with different sized numbers", () => {
    let l1 = new LinkedList();
    l1.appendToTail(7);
    l1.appendToTail(1);
    l1.appendToTail(8);
    l1.appendToTail(9);

    let l2 = new LinkedList();
    l2.appendToTail(2);
    l2.appendToTail(9);
    l2.appendToTail(3);

    let sum = sumLists(l1, l2);
    let result = listValues(sum);
    const expected = [9, 0, 2, 0, 1];

    expect(result).toEqual(expected);
  });

  test("sum lists with different sized numbers", () => {
    let l1 = new LinkedList();
    l1.appendToTail(9);
    l1.appendToTail(5);
    l1.appendToTail(4);

    let l2 = new LinkedList();
    l2.appendToTail(5);
    l2.appendToTail(8);
    l2.appendToTail(2);
    l2.appendToTail(1);
    l2.appendToTail(1);

    let sum = sumLists(l1, l2);
    let result = listValues(sum);
    const expected = [4, 4, 7, 1, 1];

    expect(result).toEqual(expected);
  });
});
