const LinkedList = require("../linked-list");
const removeDups = require("../2-1-remove-dups");
const listValues = require("../list-values");

describe("removeDups", () => {
  test("in the beginning of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    removeDups(l);
    const values = listValues(l);

    const expected = [1, 2, 3];
    expect(values).toEqual(expected);
  });

  test("in the middle of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(2);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(4);
    l.appendToTail(4);
    l.appendToTail(1);
    l.appendToTail(6);
    l.appendToTail(6);

    removeDups(l);
    const values = listValues(l);

    const expected = [1, 2, 3, 4, 5, 6];
    expect(values).toEqual(expected);
  });

  test("in the beginning of list", () => {
    let l = new LinkedList();
    l.appendToTail(4);
    l.appendToTail(2);
    l.appendToTail(1);
    l.appendToTail(1);
    l.appendToTail(1);

    removeDups(l);
    const values = listValues(l);

    const expected = [4, 2, 1];
    expect(values).toEqual(expected);
  });
});
