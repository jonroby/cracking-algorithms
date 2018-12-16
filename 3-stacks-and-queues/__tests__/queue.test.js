const Queue = require("../queue");
const listValues = require("../../2-linked-lists/list-values");

function stackValues(stack) {
  return Object.keys(stack._storage).map(k => stack._storage[k]);
}

describe("Queue", () => {
  test("adds values correctly", () => {
    let queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    const result = listValues(queue._storage);

    const expected = [1, 2, 3];
    expect(result).toEqual(expected);
  });

  test("removes values correctly", () => {
    let queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    const result = queue.remove();
    const storage = listValues(queue._storage);
    const expected = 1;
    const expectedStorage = [2, 3];
    expect(result).toEqual(expected);
    expect(storage).toEqual(expectedStorage);
  });

  test("isEmpty", () => {
    let queue = new Queue();
    queue.add(1);
    queue.add(2);

    const result = queue.isEmpty();

    const expected = false;
    expect(result).toEqual(expected);
  });

  test("isEmpty", () => {
    let queue = new Queue();
    const result = queue.isEmpty();

    const expected = true;
    expect(result).toEqual(expected);
  });

  test("peek shows first element", () => {
    let queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);

    const result = queue.peek();
    const expected = 1;
    expect(result).toEqual(expected);
  });
});
