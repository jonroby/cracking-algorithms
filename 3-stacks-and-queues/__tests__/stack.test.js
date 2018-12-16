const Stack = require("../stack");

function stackValues(stack) {
  return Object.keys(stack._storage).map(k => stack._storage[k]);
}

describe("Stack", () => {
  test("adds values correctly", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const result = stackValues(stack);

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

    const result = stackValues(stack);

    const expected = [1];
    expect(result).toEqual(expected);
  });

  test("stores count", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    const result = stack._count;

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
    const result = stack._count;

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
