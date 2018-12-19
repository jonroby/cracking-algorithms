'use strict';

var _LinkedList = require('../../../../data-structures/linked-list/LinkedList');

var _LinkedList2 = _interopRequireDefault(_LinkedList);

var _traversal = require('../traversal');

var _traversal2 = _interopRequireDefault(_traversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('traversal', function () {
  it('should traverse linked list', function () {
    var linkedList = new _LinkedList2.default();

    linkedList.append(1).append(2).append(3);

    var traversedNodeValues = [];
    var traversalCallback = function traversalCallback(nodeValue) {
      traversedNodeValues.push(nodeValue);
    };

    (0, _traversal2.default)(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([1, 2, 3]);
  });
});