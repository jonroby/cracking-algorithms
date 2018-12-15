const LinkedList = require("../linked-list");
const listValues = require("../list-values");

describe("LinkedList", () => {
  test("adds values correctly", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    const values = listValues(l);

    const expected = [1, 2, 3, 4];
    expect(values).toEqual(expected);
  });

  test("removes values correctly", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);

    l.deleteNode(2);
    l.deleteNode(4);
    const values = listValues(l);

    const expected = [1, 3];
    expect(values).toEqual(expected);
  });
});