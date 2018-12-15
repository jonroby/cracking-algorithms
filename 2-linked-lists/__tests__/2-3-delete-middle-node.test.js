const LinkedList = require("../linked-list");
const deleteMiddleNode = require("../2-3-delete-middle-node");
const listValues = require("../list-values");

function getNode(lst, idx) {
  let n = lst._head;
  let count = 0;
  while (n._next !== null && count < idx) {
    n = n._next;
    count += 1;
  }
  return n;
}

describe("deleteMiddleNode", () => {
  test("in the middle of list", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    let n = getNode(l, 2);
    deleteMiddleNode(n);
    const result = listValues(l);
    const expected = [1, 2, 4, 5];

    expect(result).toEqual(expected);
  });
});
