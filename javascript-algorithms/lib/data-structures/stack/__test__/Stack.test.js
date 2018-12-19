'use strict';

var _Stack = require('../Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Stack', function () {
  it('should create empty stack', function () {
    var stack = new _Stack2.default();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });

  it('should stack data to stack', function () {
    var stack = new _Stack2.default();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('2,1');
  });

  it('should peek data from stack', function () {
    var stack = new _Stack2.default();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', function () {
    var stack = new _Stack2.default();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should pop data from stack', function () {
    var stack = new _Stack2.default();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to push/pop objects', function () {
    var stack = new _Stack2.default();

    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });

    var stringifier = function stringifier(value) {
      return value.key + ':' + value.value;
    };

    expect(stack.toString(stringifier)).toBe('key2:test2,key1:test1');
    expect(stack.pop().value).toBe('test2');
    expect(stack.pop().value).toBe('test1');
  });

  it('should be possible to convert stack to array', function () {
    var stack = new _Stack2.default();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});