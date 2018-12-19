'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _eulerianPath = require('../eulerianPath');

var _eulerianPath2 = _interopRequireDefault(_eulerianPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('eulerianPath', function () {
  it('should throw an error when graph is not Eulerian', function () {
    function findEulerianPathInNotEulerianGraph() {
      var vertexA = new _GraphVertex2.default('A');
      var vertexB = new _GraphVertex2.default('B');
      var vertexC = new _GraphVertex2.default('C');
      var vertexD = new _GraphVertex2.default('D');
      var vertexE = new _GraphVertex2.default('E');

      var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
      var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
      var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
      var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
      var edgeCE = new _GraphEdge2.default(vertexC, vertexE);

      var graph = new _Graph2.default();

      graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeCE);

      (0, _eulerianPath2.default)(graph);
    }

    expect(findEulerianPathInNotEulerianGraph).toThrowError();
  });

  it('should find Eulerian Circuit in graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE);
    var edgeAF = new _GraphEdge2.default(vertexA, vertexF);
    var edgeAG = new _GraphEdge2.default(vertexA, vertexG);
    var edgeGF = new _GraphEdge2.default(vertexG, vertexF);
    var edgeBE = new _GraphEdge2.default(vertexB, vertexE);
    var edgeEB = new _GraphEdge2.default(vertexE, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeED = new _GraphEdge2.default(vertexE, vertexD);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAE).addEdge(edgeAF).addEdge(edgeAG).addEdge(edgeGF).addEdge(edgeBE).addEdge(edgeEB).addEdge(edgeBC).addEdge(edgeED).addEdge(edgeCD);

    var graphEdgesCount = graph.getAllEdges().length;

    var eulerianPathSet = (0, _eulerianPath2.default)(graph);

    expect(eulerianPathSet.length).toBe(graphEdgesCount + 1);

    expect(eulerianPathSet[0].getKey()).toBe(vertexA.getKey());
    expect(eulerianPathSet[1].getKey()).toBe(vertexB.getKey());
    expect(eulerianPathSet[2].getKey()).toBe(vertexE.getKey());
    expect(eulerianPathSet[3].getKey()).toBe(vertexB.getKey());
    expect(eulerianPathSet[4].getKey()).toBe(vertexC.getKey());
    expect(eulerianPathSet[5].getKey()).toBe(vertexD.getKey());
    expect(eulerianPathSet[6].getKey()).toBe(vertexE.getKey());
    expect(eulerianPathSet[7].getKey()).toBe(vertexA.getKey());
    expect(eulerianPathSet[8].getKey()).toBe(vertexF.getKey());
    expect(eulerianPathSet[9].getKey()).toBe(vertexG.getKey());
    expect(eulerianPathSet[10].getKey()).toBe(vertexA.getKey());
  });

  it('should find Eulerian Path in graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
    var edgeDC = new _GraphEdge2.default(vertexD, vertexC);
    var edgeCE = new _GraphEdge2.default(vertexC, vertexE);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeFH = new _GraphEdge2.default(vertexF, vertexH);
    var edgeFG = new _GraphEdge2.default(vertexF, vertexG);
    var edgeHG = new _GraphEdge2.default(vertexH, vertexG);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeBD).addEdge(edgeDC).addEdge(edgeCE).addEdge(edgeEF).addEdge(edgeFH).addEdge(edgeFG).addEdge(edgeHG);

    var graphEdgesCount = graph.getAllEdges().length;

    var eulerianPathSet = (0, _eulerianPath2.default)(graph);

    expect(eulerianPathSet.length).toBe(graphEdgesCount + 1);

    expect(eulerianPathSet[0].getKey()).toBe(vertexC.getKey());
    expect(eulerianPathSet[1].getKey()).toBe(vertexA.getKey());
    expect(eulerianPathSet[2].getKey()).toBe(vertexB.getKey());
    expect(eulerianPathSet[3].getKey()).toBe(vertexD.getKey());
    expect(eulerianPathSet[4].getKey()).toBe(vertexC.getKey());
    expect(eulerianPathSet[5].getKey()).toBe(vertexE.getKey());
    expect(eulerianPathSet[6].getKey()).toBe(vertexF.getKey());
    expect(eulerianPathSet[7].getKey()).toBe(vertexH.getKey());
    expect(eulerianPathSet[8].getKey()).toBe(vertexG.getKey());
    expect(eulerianPathSet[9].getKey()).toBe(vertexF.getKey());
  });
});