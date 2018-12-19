'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _floydWarshall4 = require('../floydWarshall');

var _floydWarshall5 = _interopRequireDefault(_floydWarshall4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('floydWarshall', function () {
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

    // Add vertices first just to have them in desired order.
    graph.addVertex(vertexA).addVertex(vertexB).addVertex(vertexC).addVertex(vertexD).addVertex(vertexE).addVertex(vertexF).addVertex(vertexG).addVertex(vertexH);

    // Now, when vertices are in correct order let's add edges.
    graph.addEdge(edgeAB).addEdge(edgeAE).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeEC).addEdge(edgeED).addEdge(edgeDC).addEdge(edgeDG).addEdge(edgeDF).addEdge(edgeFG).addEdge(edgeEG);

    var _floydWarshall = (0, _floydWarshall5.default)(graph),
        distances = _floydWarshall.distances,
        nextVertices = _floydWarshall.nextVertices;

    var vertices = graph.getAllVertices();

    var vertexAIndex = vertices.indexOf(vertexA);
    var vertexBIndex = vertices.indexOf(vertexB);
    var vertexCIndex = vertices.indexOf(vertexC);
    var vertexDIndex = vertices.indexOf(vertexD);
    var vertexEIndex = vertices.indexOf(vertexE);
    var vertexFIndex = vertices.indexOf(vertexF);
    var vertexGIndex = vertices.indexOf(vertexG);
    var vertexHIndex = vertices.indexOf(vertexH);

    expect(distances[vertexAIndex][vertexHIndex]).toBe(Infinity);
    expect(distances[vertexAIndex][vertexAIndex]).toBe(0);
    expect(distances[vertexAIndex][vertexBIndex]).toBe(4);
    expect(distances[vertexAIndex][vertexEIndex]).toBe(7);
    expect(distances[vertexAIndex][vertexCIndex]).toBe(3);
    expect(distances[vertexAIndex][vertexDIndex]).toBe(9);
    expect(distances[vertexAIndex][vertexGIndex]).toBe(12);
    expect(distances[vertexAIndex][vertexFIndex]).toBe(11);

    expect(nextVertices[vertexAIndex][vertexFIndex]).toBe(vertexD);
    expect(nextVertices[vertexAIndex][vertexDIndex]).toBe(vertexB);
    expect(nextVertices[vertexAIndex][vertexBIndex]).toBe(vertexA);
    expect(nextVertices[vertexAIndex][vertexGIndex]).toBe(vertexE);
    expect(nextVertices[vertexAIndex][vertexCIndex]).toBe(vertexA);
    expect(nextVertices[vertexAIndex][vertexAIndex]).toBe(null);
    expect(nextVertices[vertexAIndex][vertexHIndex]).toBe(null);
  });

  it('should find minimum paths to all vertices for directed graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB, 3);
    var edgeBA = new _GraphEdge2.default(vertexB, vertexA, 8);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD, 7);
    var edgeDA = new _GraphEdge2.default(vertexD, vertexA, 2);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC, 2);
    var edgeCA = new _GraphEdge2.default(vertexC, vertexA, 5);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD, 1);

    var graph = new _Graph2.default(true);

    // Add vertices first just to have them in desired order.
    graph.addVertex(vertexA).addVertex(vertexB).addVertex(vertexC).addVertex(vertexD);

    // Now, when vertices are in correct order let's add edges.
    graph.addEdge(edgeAB).addEdge(edgeBA).addEdge(edgeAD).addEdge(edgeDA).addEdge(edgeBC).addEdge(edgeCA).addEdge(edgeCD);

    var _floydWarshall2 = (0, _floydWarshall5.default)(graph),
        distances = _floydWarshall2.distances,
        nextVertices = _floydWarshall2.nextVertices;

    var vertices = graph.getAllVertices();

    var vertexAIndex = vertices.indexOf(vertexA);
    var vertexBIndex = vertices.indexOf(vertexB);
    var vertexCIndex = vertices.indexOf(vertexC);
    var vertexDIndex = vertices.indexOf(vertexD);

    expect(distances[vertexAIndex][vertexAIndex]).toBe(0);
    expect(distances[vertexAIndex][vertexBIndex]).toBe(3);
    expect(distances[vertexAIndex][vertexCIndex]).toBe(5);
    expect(distances[vertexAIndex][vertexDIndex]).toBe(6);

    expect(distances).toEqual([[0, 3, 5, 6], [5, 0, 2, 3], [3, 6, 0, 1], [2, 5, 7, 0]]);

    expect(nextVertices[vertexAIndex][vertexDIndex]).toBe(vertexC);
    expect(nextVertices[vertexAIndex][vertexCIndex]).toBe(vertexB);
    expect(nextVertices[vertexBIndex][vertexDIndex]).toBe(vertexC);
    expect(nextVertices[vertexAIndex][vertexAIndex]).toBe(null);
    expect(nextVertices[vertexAIndex][vertexBIndex]).toBe(vertexA);
  });

  it('should find minimum paths to all vertices for directed graph with negative edge weights', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');

    var edgeFE = new _GraphEdge2.default(vertexF, vertexE, 8);
    var edgeFA = new _GraphEdge2.default(vertexF, vertexA, 10);
    var edgeED = new _GraphEdge2.default(vertexE, vertexD, 1);
    var edgeDA = new _GraphEdge2.default(vertexD, vertexA, -4);
    var edgeDC = new _GraphEdge2.default(vertexD, vertexC, -1);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC, 2);
    var edgeCB = new _GraphEdge2.default(vertexC, vertexB, -2);
    var edgeBA = new _GraphEdge2.default(vertexB, vertexA, 1);

    var graph = new _Graph2.default(true);

    // Add vertices first just to have them in desired order.
    graph.addVertex(vertexA).addVertex(vertexB).addVertex(vertexC).addVertex(vertexD).addVertex(vertexE).addVertex(vertexF).addVertex(vertexG);

    // Now, when vertices are in correct order let's add edges.
    graph.addEdge(edgeFE).addEdge(edgeFA).addEdge(edgeED).addEdge(edgeDA).addEdge(edgeDC).addEdge(edgeAC).addEdge(edgeCB).addEdge(edgeBA);

    var _floydWarshall3 = (0, _floydWarshall5.default)(graph),
        distances = _floydWarshall3.distances,
        nextVertices = _floydWarshall3.nextVertices;

    var vertices = graph.getAllVertices();

    var vertexAIndex = vertices.indexOf(vertexA);
    var vertexBIndex = vertices.indexOf(vertexB);
    var vertexCIndex = vertices.indexOf(vertexC);
    var vertexDIndex = vertices.indexOf(vertexD);
    var vertexEIndex = vertices.indexOf(vertexE);
    var vertexGIndex = vertices.indexOf(vertexG);
    var vertexFIndex = vertices.indexOf(vertexF);

    expect(distances[vertexFIndex][vertexGIndex]).toBe(Infinity);
    expect(distances[vertexFIndex][vertexFIndex]).toBe(0);
    expect(distances[vertexFIndex][vertexAIndex]).toBe(5);
    expect(distances[vertexFIndex][vertexBIndex]).toBe(5);
    expect(distances[vertexFIndex][vertexCIndex]).toBe(7);
    expect(distances[vertexFIndex][vertexDIndex]).toBe(9);
    expect(distances[vertexFIndex][vertexEIndex]).toBe(8);

    expect(nextVertices[vertexFIndex][vertexGIndex]).toBe(null);
    expect(nextVertices[vertexFIndex][vertexFIndex]).toBe(null);
    expect(nextVertices[vertexAIndex][vertexBIndex]).toBe(vertexC);
    expect(nextVertices[vertexAIndex][vertexCIndex]).toBe(vertexA);
    expect(nextVertices[vertexFIndex][vertexBIndex]).toBe(vertexE);
    expect(nextVertices[vertexEIndex][vertexBIndex]).toBe(vertexD);
    expect(nextVertices[vertexDIndex][vertexBIndex]).toBe(vertexC);
    expect(nextVertices[vertexCIndex][vertexBIndex]).toBe(vertexC);
  });
});