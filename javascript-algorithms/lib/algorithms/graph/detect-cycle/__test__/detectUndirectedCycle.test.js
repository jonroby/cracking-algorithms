'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _detectUndirectedCycle = require('../detectUndirectedCycle');

var _detectUndirectedCycle2 = _interopRequireDefault(_detectUndirectedCycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('detectUndirectedCycle', function () {
  it('should detect undirected cycle', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');

    var edgeAF = new _GraphEdge2.default(vertexA, vertexF);
    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBE = new _GraphEdge2.default(vertexB, vertexE);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);

    var graph = new _Graph2.default();
    graph.addEdge(edgeAF).addEdge(edgeAB).addEdge(edgeBE).addEdge(edgeBC).addEdge(edgeCD);

    expect((0, _detectUndirectedCycle2.default)(graph)).toBeNull();

    graph.addEdge(edgeDE);

    expect((0, _detectUndirectedCycle2.default)(graph)).toEqual({
      B: vertexC,
      C: vertexD,
      D: vertexE,
      E: vertexB
    });
  });
});