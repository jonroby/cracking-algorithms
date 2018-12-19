'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _hamiltonianCycle = require('../hamiltonianCycle');

var _hamiltonianCycle2 = _interopRequireDefault(_hamiltonianCycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('hamiltonianCycle', function () {
  it('should find hamiltonian paths in graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeBE = new _GraphEdge2.default(vertexB, vertexE);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);

    var graph = new _Graph2.default();
    graph.addEdge(edgeAB).addEdge(edgeAE).addEdge(edgeAC).addEdge(edgeBE).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeCD).addEdge(edgeDE);

    var hamiltonianCycleSet = (0, _hamiltonianCycle2.default)(graph);

    expect(hamiltonianCycleSet.length).toBe(8);

    expect(hamiltonianCycleSet[0][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[0][1].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[0][2].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[0][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[0][4].getKey()).toBe(vertexC.getKey());

    expect(hamiltonianCycleSet[1][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[1][1].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[1][2].getKey()).toBe(vertexC.getKey());
    expect(hamiltonianCycleSet[1][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[1][4].getKey()).toBe(vertexE.getKey());

    expect(hamiltonianCycleSet[2][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[2][1].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[2][2].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[2][3].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[2][4].getKey()).toBe(vertexC.getKey());

    expect(hamiltonianCycleSet[3][0].getKey()).toBe(vertexA.getKey());
    expect(hamiltonianCycleSet[3][1].getKey()).toBe(vertexE.getKey());
    expect(hamiltonianCycleSet[3][2].getKey()).toBe(vertexD.getKey());
    expect(hamiltonianCycleSet[3][3].getKey()).toBe(vertexB.getKey());
    expect(hamiltonianCycleSet[3][4].getKey()).toBe(vertexC.getKey());
  });

  it('should return false for graph without Hamiltonian path', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE);
    var edgeBE = new _GraphEdge2.default(vertexB, vertexE);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);

    var graph = new _Graph2.default();
    graph.addEdge(edgeAB).addEdge(edgeAE).addEdge(edgeBE).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeCD);

    var hamiltonianCycleSet = (0, _hamiltonianCycle2.default)(graph);

    expect(hamiltonianCycleSet.length).toBe(0);
  });
});