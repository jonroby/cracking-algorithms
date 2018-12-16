const StackMin = require("../3-2-stack-min");
const listValues = require("../../2-linked-lists/list-values");

describe("StackMin", () => {
  test("adds values correctly", () => {
    let stack = new StackMin();
    stack.push(10);
    stack.push(15);
    stack.push(8);
    stack.push(7);
    stack.push(16);
    stack.push(2);
    stack.push(3);
    stack.push(5);
    const result = stack.getMin();

    const expected = 2;
    expect(result).toEqual(expected);
  });

  test("returns min when last element is smallest", () => {
    let stack = new StackMin();
    stack.push(10);
    stack.push(15);
    stack.push(8);
    stack.push(7);
    stack.push(16);
    stack.push(2);
    stack.push(3);
    stack.push(1);
    const result = stack.getMin();

    const expected = 1;
    expect(result).toEqual(expected);
  });

  test("returns null if no elements pushed", () => {
    let stack = new StackMin();
    const result = stack.getMin();

    const expected = null;
    expect(result).toEqual(expected);
  });

  test("returns null if no elements", () => {
    let stack = new StackMin();
    stack.push(10);
    stack.pop();
    const result = stack.getMin();

    const expected = null;
    expect(result).toEqual(expected);
  });
});
