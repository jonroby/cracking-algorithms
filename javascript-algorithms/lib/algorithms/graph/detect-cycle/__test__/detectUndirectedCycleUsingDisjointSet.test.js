'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _detectUndirectedCycleUsingDisjointSet = require('../detectUndirectedCycleUsingDisjointSet');

var _detectUndirectedCycleUsingDisjointSet2 = _interopRequireDefault(_detectUndirectedCycleUsingDisjointSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('detectUndirectedCycleUsingDisjointSet', function () {
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

    expect((0, _detectUndirectedCycleUsingDisjointSet2.default)(graph)).toBe(false);

    graph.addEdge(edgeDE);

    expect((0, _detectUndirectedCycleUsingDisjointSet2.default)(graph)).toBe(true);
  });
});