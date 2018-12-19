'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _graphBridges = require('../graphBridges');

var _graphBridges2 = _interopRequireDefault(_graphBridges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('graphBridges', function () {
  it('should find bridges in simple graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCD);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(3);
    expect(bridges[0].getKey()).toBe(edgeCD.getKey());
    expect(bridges[1].getKey()).toBe(edgeBC.getKey());
    expect(bridges[2].getKey()).toBe(edgeAB.getKey());
  });

  it('should find bridges in simple graph with back edge', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeCD);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(1);
    expect(bridges[0].getKey()).toBe(edgeCD.getKey());
  });

  it('should find bridges in graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);
    var edgeEG = new _GraphEdge2.default(vertexE, vertexG);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeGF = new _GraphEdge2.default(vertexG, vertexF);
    var edgeFH = new _GraphEdge2.default(vertexF, vertexH);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeAC).addEdge(edgeCD).addEdge(edgeDE).addEdge(edgeEG).addEdge(edgeEF).addEdge(edgeGF).addEdge(edgeFH);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(3);
    expect(bridges[0].getKey()).toBe(edgeFH.getKey());
    expect(bridges[1].getKey()).toBe(edgeDE.getKey());
    expect(bridges[2].getKey()).toBe(edgeCD.getKey());
  });

  it('should find bridges in graph starting with different root vertex', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);
    var edgeEG = new _GraphEdge2.default(vertexE, vertexG);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeGF = new _GraphEdge2.default(vertexG, vertexF);
    var edgeFH = new _GraphEdge2.default(vertexF, vertexH);

    var graph = new _Graph2.default();

    graph.addEdge(edgeDE).addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeAC).addEdge(edgeCD).addEdge(edgeEG).addEdge(edgeEF).addEdge(edgeGF).addEdge(edgeFH);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(3);
    expect(bridges[0].getKey()).toBe(edgeFH.getKey());
    expect(bridges[1].getKey()).toBe(edgeDE.getKey());
    expect(bridges[2].getKey()).toBe(edgeCD.getKey());
  });

  it('should find bridges in yet another graph #1', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeDE);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(2);
    expect(bridges[0].getKey()).toBe(edgeDE.getKey());
    expect(bridges[1].getKey()).toBe(edgeCD.getKey());
  });

  it('should find bridges in yet another graph #2', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeCE = new _GraphEdge2.default(vertexC, vertexE);
    var edgeCF = new _GraphEdge2.default(vertexC, vertexF);
    var edgeEG = new _GraphEdge2.default(vertexE, vertexG);
    var edgeFG = new _GraphEdge2.default(vertexF, vertexG);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeCE).addEdge(edgeCF).addEdge(edgeEG).addEdge(edgeFG);

    var bridges = Object.values((0, _graphBridges2.default)(graph));

    expect(bridges.length).toBe(1);
    expect(bridges[0].getKey()).toBe(edgeCD.getKey());
  });
});