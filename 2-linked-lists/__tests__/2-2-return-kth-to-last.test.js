const LinkedList = require("../linked-list");
const returnKthToLast = require('../2-2-return-kth-to-last');
const listValues = require("../list-values");

describe("returnKthToLast", () => {
  test("in the beginning of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    const result = returnKthToLast(l, 2)._val;
    const expected = 3;
    expect(result).toEqual(expected);
  });
});
