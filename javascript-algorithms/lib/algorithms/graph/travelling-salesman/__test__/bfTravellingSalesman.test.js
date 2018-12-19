'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _bfTravellingSalesman = require('../bfTravellingSalesman');

var _bfTravellingSalesman2 = _interopRequireDefault(_bfTravellingSalesman);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bfTravellingSalesman', function () {
  it('should solve problem for simple graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB, 1);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD, 1);
    var edgeDC = new _GraphEdge2.default(vertexD, vertexC, 1);
    var edgeCA = new _GraphEdge2.default(vertexC, vertexA, 1);

    var edgeBA = new _GraphEdge2.default(vertexB, vertexA, 5);
    var edgeDB = new _GraphEdge2.default(vertexD, vertexB, 8);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD, 7);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC, 4);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD, 2);
    var edgeDA = new _GraphEdge2.default(vertexD, vertexA, 3);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC, 3);
    var edgeCB = new _GraphEdge2.default(vertexC, vertexB, 9);

    var graph = new _Graph2.default(true);
    graph.addEdge(edgeAB).addEdge(edgeBD).addEdge(edgeDC).addEdge(edgeCA).addEdge(edgeBA).addEdge(edgeDB).addEdge(edgeCD).addEdge(edgeAC).addEdge(edgeAD).addEdge(edgeDA).addEdge(edgeBC).addEdge(edgeCB);

    var salesmanPath = (0, _bfTravellingSalesman2.default)(graph);

    expect(salesmanPath.length).toBe(4);

    expect(salesmanPath[0].getKey()).toEqual(vertexA.getKey());
    expect(salesmanPath[1].getKey()).toEqual(vertexB.getKey());
    expect(salesmanPath[2].getKey()).toEqual(vertexD.getKey());
    expect(salesmanPath[3].getKey()).toEqual(vertexC.getKey());
  });
});