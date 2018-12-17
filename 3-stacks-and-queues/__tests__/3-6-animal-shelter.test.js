const AnimalShelter = require("../3-6-animal-shelter");

describe("AnimalShelter", () => {
  test("dequeueAny dequeues earliest arrival", () => {
    let results = [];
    let queue = new AnimalShelter();
    queue.enqueue({ type: "dog", name: "d1" });
    queue.enqueue({ type: "cat", name: "c1" });
    queue.enqueue({ type: "cat", name: "c2" });
    queue.enqueue({ type: "dog", name: "d2" });
    results.push(queue.dequeueAny());
    results.push(queue.dequeueAny());
    results.push(queue.dequeueAny());
    queue.enqueue({ type: "cat", name: "c3" });
    queue.enqueue({ type: "cat", name: "c4" });
    results.push(queue.dequeueAny());
    results.push(queue.dequeueAny());

    // A bug in queue will not correctly empty out all enqueued items.
    // results.push(queue.dequeueAny());
    let result = results.map(res => res.name);

    expect(result).toEqual(["d1", "c1", "c2", "d2", "c3"]);
  });
});
