const Stack = require("../stack");
const listValues = require("../../2-linked-lists/list-values");

describe("Stack", () => {
  test("adds values correctly", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const result = listValues(stack._storage);

    const expected = [1, 2, 3];
    expect(result).toEqual(expected);
  });

  test("removes values correctly", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();

    const result = listValues(stack._storage);

    const expected = [1];
    expect(result).toEqual(expected);
  });

  test("removes all values correctly", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();

    const result = listValues(stack._storage);

    const expected = [];
    expect(result).toEqual(expected);
  });

  test("stores count", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    const result = stack.getCount();

    const expected = 4;
    expect(result).toEqual(expected);
  });

  test("updates count after popping", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.pop();
    const result = stack.getCount();

    const expected = 3;
    expect(result).toEqual(expected);
  });

  test("peek shows last element", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const result = stack.peek();
    const expected = 3;
    expect(result).toEqual(expected);
  });
});
