const LinkedList = require("../linked-list");
const loopDetection = require("../2-8-loop-detection");
const listValues = require("../list-values");

describe("loopDetection", () => {
  test("returns true for loopDetections", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(6);

    let middleNode = l.getNode(2);
    let lastNode = l.getNode(5);

    lastNode._next = middleNode;

    const result = loopDetection(l);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test("returns false if no loop", () => {
    let l = new LinkedList();
    l.appendToTail(1);
    l.appendToTail(2);
    l.appendToTail(3);
    l.appendToTail(4);
    l.appendToTail(5);
    l.appendToTail(6);

    const result = loopDetection(l);
    const expected = false;

    expect(result).toEqual(expected);
  });
});
