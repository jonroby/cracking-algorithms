'use strict';

var _Queue = require('../Queue');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Queue', function () {
  it('should create empty queue', function () {
    var queue = new _Queue2.default();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it('should enqueue data to queue', function () {
    var queue = new _Queue2.default();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('1,2');
  });

  it('should be possible to enqueue/dequeue objects', function () {
    var queue = new _Queue2.default();

    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });

    var stringifier = function stringifier(value) {
      return value.key + ':' + value.value;
    };

    expect(queue.toString(stringifier)).toBe('key1:test1,key2:test2');
    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });

  it('should peek data from queue', function () {
    var queue = new _Queue2.default();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', function () {
    var queue = new _Queue2.default();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', function () {
    var queue = new _Queue2.default();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });
});