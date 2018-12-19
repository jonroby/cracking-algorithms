'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _bellmanFord3 = require('../bellmanFord');

var _bellmanFord4 = _interopRequireDefault(_bellmanFord3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bellmanFord', function () {
  it('should find minimum paths to all vertices for undirected graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB, 4);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE, 7);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC, 3);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC, 6);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD, 5);
    var edgeEC = new _GraphEdge2.default(vertexE, vertexC, 8);
    var edgeED = new _GraphEdge2.default(vertexE, vertexD, 2);
    var edgeDC = new _GraphEdge2.default(vertexD, vertexC, 11);
    var edgeDG = new _GraphEdge2.default(vertexD, vertexG, 10);
    var edgeDF = new _GraphEdge2.default(vertexD, vertexF, 2);
    var edgeFG = new _GraphEdge2.default(vertexF, vertexG, 3);
    var edgeEG = new _GraphEdge2.default(vertexE, vertexG, 5);

    var graph = new _Graph2.default();
    graph.addVertex(vertexH).addEdge(edgeAB).addEdge(edgeAE).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeEC).addEdge(edgeED).addEdge(edgeDC).addEdge(edgeDG).addEdge(edgeDF).addEdge(edgeFG).addEdge(edgeEG);

    var _bellmanFord = (0, _bellmanFord4.default)(graph, vertexA),
        distances = _bellmanFord.distances,
        previousVertices = _bellmanFord.previousVertices;

    expect(distances).toEqual({
      H: Infinity,
      A: 0,
      B: 4,
      E: 7,
      C: 3,
      D: 9,
      G: 12,
      F: 11
    });

    expect(previousVertices.F.getKey()).toBe('D');
    expect(previousVertices.D.getKey()).toBe('B');
    expect(previousVertices.B.getKey()).toBe('A');
    expect(previousVertices.G.getKey()).toBe('E');
    expect(previousVertices.C.getKey()).toBe('A');
    expect(previousVertices.A).toBeNull();
    expect(previousVertices.H).toBeNull();
  });

  it('should find minimum paths to all vertices for directed graph with negative edge weights', function () {
    var vertexS = new _GraphVertex2.default('S');
    var vertexE = new _GraphVertex2.default('E');
    var vertexA = new _GraphVertex2.default('A');
    var vertexD = new _GraphVertex2.default('D');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexH = new _GraphVertex2.default('H');

    var edgeSE = new _GraphEdge2.default(vertexS, vertexE, 8);
    var edgeSA = new _GraphEdge2.default(vertexS, vertexA, 10);
    var edgeED = new _GraphEdge2.default(vertexE, vertexD, 1);
    var edgeDA = new _GraphEdge2.default(vertexD, vertexA, -4);
    var edgeDC = new _GraphEdge2.default(vertexD, vertexC, -1);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC, 2);
    var edgeCB = new _GraphEdge2.default(vertexC, vertexB, -2);
    var edgeBA = new _GraphEdge2.default(vertexB, vertexA, 1);

    var graph = new _Graph2.default(true);
    graph.addVertex(vertexH).addEdge(edgeSE).addEdge(edgeSA).addEdge(edgeED).addEdge(edgeDA).addEdge(edgeDC).addEdge(edgeAC).addEdge(edgeCB).addEdge(edgeBA);

    var _bellmanFord2 = (0, _bellmanFord4.default)(graph, vertexS),
        distances = _bellmanFord2.distances,
        previousVertices = _bellmanFord2.previousVertices;

    expect(distances).toEqual({
      H: Infinity,
      S: 0,
      A: 5,
      B: 5,
      C: 7,
      D: 9,
      E: 8
    });

    expect(previousVertices.H).toBeNull();
    expect(previousVertices.S).toBeNull();
    expect(previousVertices.B.getKey()).toBe('C');
    expect(previousVertices.C.getKey()).toBe('A');
    expect(previousVertices.A.getKey()).toBe('D');
    expect(previousVertices.D.getKey()).toBe('E');
  });
});