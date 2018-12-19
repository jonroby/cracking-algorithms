'use strict';

var _LinkedList = require('../../../../data-structures/linked-list/LinkedList');

var _LinkedList2 = _interopRequireDefault(_LinkedList);

var _reverseTraversal = require('../reverseTraversal');

var _reverseTraversal2 = _interopRequireDefault(_reverseTraversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reverseTraversal', function () {
  it('should traverse linked list in reverse order', function () {
    var linkedList = new _LinkedList2.default();

    linkedList.append(1).append(2).append(3);

    var traversedNodeValues = [];
    var traversalCallback = function traversalCallback(nodeValue) {
      traversedNodeValues.push(nodeValue);
    };

    (0, _reverseTraversal2.default)(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([3, 2, 1]);
  });
});

// it('should reverse traversal the linked list with callback', () => {
//   const linkedList = new LinkedList();
//
//   linkedList
//     .append(1)
//     .append(2)
//     .append(3);
//
//   expect(linkedList.toString()).toBe('1,2,3');
//   expect(linkedList.reverseTraversal(linkedList.head, value => value * 2)).toEqual([6, 4, 2]);
//   expect(() => linkedList.reverseTraversal(linkedList.head)).toThrow();
// });