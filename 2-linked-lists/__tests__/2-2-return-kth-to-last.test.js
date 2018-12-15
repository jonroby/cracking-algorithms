const LinkedList = require("../linked-list");
const {
  returnKthToLast1,
  returnKthToLast2,
  returnKthToLast3
} = require("../2-2-return-kth-to-last");
const listValues = require("../list-values");

describe("returnKthToLast1 (uses length property)", () => {
  test("in the middle of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    const result = returnKthToLast1(l, 2)._val;
    const expected = 3;
    expect(result).toEqual(expected);
  });
});

describe("returnKthToLast2 (partially recursive)", () => {
  test("in the middle of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(6);
    const result = returnKthToLast2(l, 2)._val;
    const expected = 4;
    expect(result).toEqual(expected);
  });
});

describe("returnKthToLast3 (purely recursive)", () => {
  test("in the middle of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(6);
    const result = returnKthToLast3(l, 2)._val;
    const expected = 4;
    expect(result).toEqual(expected);
  });
});
