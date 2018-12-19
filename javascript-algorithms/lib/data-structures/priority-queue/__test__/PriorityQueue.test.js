'use strict';

var _PriorityQueue = require('../PriorityQueue');

var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PriorityQueue', function () {
  it('should create default priority queue', function () {
    var priorityQueue = new _PriorityQueue2.default();

    expect(priorityQueue).toBeDefined();
  });

  it('should insert items to the queue and respect priorities', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);
  });

  it('should poll from queue with respect to priorities', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });

  it('should be possible to change priority of internal nodes', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(100, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('should be possible to change priority of head node', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('should be possible to change priority along with node addition', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    priorityQueue.add(15, 15);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(15);
    expect(priorityQueue.poll()).toBe(10);
  });

  it('should be possible to search in priority queue by value', function () {
    var priorityQueue = new _PriorityQueue2.default();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.add(15, 15);

    expect(priorityQueue.hasValue(70)).toBe(false);
    expect(priorityQueue.hasValue(15)).toBe(true);
  });
});