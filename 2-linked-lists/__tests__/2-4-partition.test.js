const LinkedList = require("../linked-list");
const partition = require("../2-4-partition");
const listValues = require("../list-values");

// Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

describe("partition", () => {
  test("puts all items greater than p to the right of list", () => {
    let l = new LinkedList();
    l.appendToTail(3);
    l.appendToTail(5);
    l.appendToTail(8);
    l.appendToTail(5);
    l.appendToTail(2);
    l.appendToTail(10);
    l.appendToTail(1);
    partition(l, 5);
    listValues(l, 5);
    const result = listValues(l);
    const expected = [3, 2, 1, 5, 8, 5, 10];

    expect(result).toEqual(expected);
  });

  test("handles head of the list", () => {
    let l = new LinkedList();
    l.appendToTail(6);
    l.appendToTail(5);
    l.appendToTail(2);
    l.appendToTail(8);
    l.appendToTail(4);
    l.appendToTail(2);
    partition(l, 5);
    listValues(l, 5);
    const result = listValues(l);
    const expected = [2, 4, 2, 6, 5, 8];

    expect(result).toEqual(expected);
  });

  test("handles tail of the list", () => {
    let l = new LinkedList();
    l.appendToTail(6);
    l.appendToTail(5);
    l.appendToTail(2);
    l.appendToTail(8);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(9);
    partition(l, 5);
    listValues(l, 5);
    const result = listValues(l);
    const expected = [2, 4, 6, 5, 8, 5, 9];

    expect(result).toEqual(expected);
  });
});
