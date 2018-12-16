const SetOfStacks = require("../3-3-stack-of-plates");
const listValues = require("../../2-linked-lists/list-values");

describe("SetOfStacks", () => {
  test("adds values correctly", () => {
    let stack = new SetOfStacks(4);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    let val = stack._stack.peek().peek();
    expect(val).toEqual(6);
    let stackLength = stack._stack.peek()._count;
    expect(stackLength).toBe(2);
  });

  test("adds multiple stacks correctly", () => {
    let stack = new SetOfStacks(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    let val = stack._stack.peek().peek();
    expect(val).toEqual(5);
    let stackLength = stack._stack._count;
    expect(stackLength).toBe(3);
  });

  test("removes values correctly", () => {
    let stack = new SetOfStacks(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.pop();
    stack.pop();

    const result = stack._stack._count;
    const expected = 2;
    expect(result).toEqual(expected);
  });

  test("removes values correctly", () => {
    let stack = new SetOfStacks(2);
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();

    const result = stack._stack._count;
    const expected = 1;
    expect(result).toEqual(expected);
  });
});
