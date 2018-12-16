const LinkedList = require("../linked-list");
const intersection = require("../2-7-intersection");
const listValues = require("../list-values");

describe("intersection", () => {
  test("returns true for intersections", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(6);

    let middleNode = l.getNode(2);
    let l2 = new LinkedList();
    l2.appendToTail(0);
    l2._length = 5;
    let n = l2._head;
    while (n._next !== null) {
      n = n._next;
    }
    n._next = middleNode;

    const result = intersection(l, l2);
    const expected = middleNode;

    expect(result).toEqual(expected);
  });
});
