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

  test("stores length", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    const result = listValues(l).length;

    const expected = 4;
    expect(result).toEqual(expected);
  });

  test("updates length after item is deleted", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);

    l.deleteNode(2);
    l.deleteNode(4);
    const result = listValues(l).length;

    const expected = 2;
    expect(result).toEqual(expected);
  });

  test("deleteAtIdx", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);

    l.deleteAtIdx(2);
    const result = listValues(l);

    const expected = [1, 2, 4];
    expect(result).toEqual(expected);
  });

  test("deleteAtIdx head", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);

    l.deleteAtIdx(0);
    const result = listValues(l);

    const expected = [2, 3, 4];
    expect(result).toEqual(expected);
  });

  test("deleteAtIdx index 1", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);

    l.deleteAtIdx(1);
    const result = listValues(l);

    const expected = [1, 3, 4];
    expect(result).toEqual(expected);
  });

  test("deleteAtIdx all values", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);

    l.deleteAtIdx(1);
    l.deleteAtIdx(1);
    l.deleteAtIdx(0);

    const result = listValues(l);

    const expected = [];
    expect(result).toEqual(expected);
  });
});
