'use strict';

var _DoublyLinkedListNode = require('../DoublyLinkedListNode');

var _DoublyLinkedListNode2 = _interopRequireDefault(_DoublyLinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DoublyLinkedListNode', function () {
  it('should create list node with value', function () {
    var node = new _DoublyLinkedListNode2.default(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('should create list node with object as a value', function () {
    var nodeValue = { value: 1, key: 'test' };
    var node = new _DoublyLinkedListNode2.default(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('should link nodes together', function () {
    var node2 = new _DoublyLinkedListNode2.default(2);
    var node1 = new _DoublyLinkedListNode2.default(1, node2);
    var node3 = new _DoublyLinkedListNode2.default(10, node1, node2);

    expect(node1.next).toBeDefined();
    expect(node1.previous).toBeNull();
    expect(node2.next).toBeNull();
    expect(node2.previous).toBeNull();
    expect(node3.next).toBeDefined();
    expect(node3.previous).toBeDefined();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node3.next.value).toBe(1);
    expect(node3.previous.value).toBe(2);
  });

  it('should convert node to string', function () {
    var node = new _DoublyLinkedListNode2.default(1);

    expect(node.toString()).toBe('1');

    node.value = 'string value';
    expect(node.toString()).toBe('string value');
  });

  it('should convert node to string with custom stringifier', function () {
    var nodeValue = { value: 1, key: 'test' };
    var node = new _DoublyLinkedListNode2.default(nodeValue);
    var toStringCallback = function toStringCallback(value) {
      return 'value: ' + value.value + ', key: ' + value.key;
    };

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});