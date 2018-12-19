'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _stronglyConnectedComponents = require('../stronglyConnectedComponents');

var _stronglyConnectedComponents2 = _interopRequireDefault(_stronglyConnectedComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stronglyConnectedComponents', function () {
  it('should detect strongly connected components in simple graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCA = new _GraphEdge2.default(vertexC, vertexA);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);

    var graph = new _Graph2.default(true);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCA).addEdge(edgeCD);

    var components = (0, _stronglyConnectedComponents2.default)(graph);

    expect(components).toBeDefined();
    expect(components.length).toBe(2);

    expect(components[0][0].getKey()).toBe(vertexA.getKey());
    expect(components[0][1].getKey()).toBe(vertexC.getKey());
    expect(components[0][2].getKey()).toBe(vertexB.getKey());

    expect(components[1][0].getKey()).toBe(vertexD.getKey());
  });

  it('should detect strongly connected components in graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');
    var vertexI = new _GraphVertex2.default('I');
    var vertexJ = new _GraphVertex2.default('J');
    var vertexK = new _GraphVertex2.default('K');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeCA = new _GraphEdge2.default(vertexC, vertexA);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeFD = new _GraphEdge2.default(vertexF, vertexD);
    var edgeGF = new _GraphEdge2.default(vertexG, vertexF);
    var edgeGH = new _GraphEdge2.default(vertexG, vertexH);
    var edgeHI = new _GraphEdge2.default(vertexH, vertexI);
    var edgeIJ = new _GraphEdge2.default(vertexI, vertexJ);
    var edgeJG = new _GraphEdge2.default(vertexJ, vertexG);
    var edgeJK = new _GraphEdge2.default(vertexJ, vertexK);

    var graph = new _Graph2.default(true);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCA).addEdge(edgeBD).addEdge(edgeDE).addEdge(edgeEF).addEdge(edgeFD).addEdge(edgeGF).addEdge(edgeGH).addEdge(edgeHI).addEdge(edgeIJ).addEdge(edgeJG).addEdge(edgeJK);

    var components = (0, _stronglyConnectedComponents2.default)(graph);

    expect(components).toBeDefined();
    expect(components.length).toBe(4);

    expect(components[0][0].getKey()).toBe(vertexG.getKey());
    expect(components[0][1].getKey()).toBe(vertexJ.getKey());
    expect(components[0][2].getKey()).toBe(vertexI.getKey());
    expect(components[0][3].getKey()).toBe(vertexH.getKey());

    expect(components[1][0].getKey()).toBe(vertexK.getKey());

    expect(components[2][0].getKey()).toBe(vertexA.getKey());
    expect(components[2][1].getKey()).toBe(vertexC.getKey());
    expect(components[2][2].getKey()).toBe(vertexB.getKey());

    expect(components[3][0].getKey()).toBe(vertexD.getKey());
    expect(components[3][1].getKey()).toBe(vertexF.getKey());
    expect(components[3][2].getKey()).toBe(vertexE.getKey());
  });
});