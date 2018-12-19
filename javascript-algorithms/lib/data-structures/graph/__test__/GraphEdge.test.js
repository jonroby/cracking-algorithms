'use strict';

var _GraphEdge = require('../GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _GraphVertex = require('../GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('GraphEdge', function () {
  it('should create graph edge with default weight', function () {
    var startVertex = new _GraphVertex2.default('A');
    var endVertex = new _GraphVertex2.default('B');
    var edge = new _GraphEdge2.default(startVertex, endVertex);

    expect(edge.getKey()).toBe('A_B');
    expect(edge.toString()).toBe('A_B');
    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);
    expect(edge.weight).toEqual(0);
  });

  it('should create graph edge with predefined weight', function () {
    var startVertex = new _GraphVertex2.default('A');
    var endVertex = new _GraphVertex2.default('B');
    var edge = new _GraphEdge2.default(startVertex, endVertex, 10);

    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);
    expect(edge.weight).toEqual(10);
  });

  it('should be possible to do edge reverse', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var edge = new _GraphEdge2.default(vertexA, vertexB, 10);

    expect(edge.startVertex).toEqual(vertexA);
    expect(edge.endVertex).toEqual(vertexB);
    expect(edge.weight).toEqual(10);

    edge.reverse();

    expect(edge.startVertex).toEqual(vertexB);
    expect(edge.endVertex).toEqual(vertexA);
    expect(edge.weight).toEqual(10);
  });
});