const QueueViaStacks = require("../3-4-queue-via-stacks");

describe("QueueViaStacks", () => {
  test("removes values correctly", () => {
    let queue = new QueueViaStacks(2);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let result = queue.dequeue();
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test("removes values correctly", () => {
    let queue = new QueueViaStacks(2);
    let ps = [];
    queue.enqueue(1);
    queue.enqueue(2);
    ps.push(queue.dequeue());
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    ps.push(queue.dequeue());
    ps.push(queue.dequeue());
    ps.push(queue.dequeue());
    queue.enqueue(6);
    ps.push(queue.dequeue());
    ps.push(queue.dequeue());

    const result = ps;
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });
});
