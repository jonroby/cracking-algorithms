'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _prim = require('../prim');

var _prim2 = _interopRequireDefault(_prim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('prim', function () {
  it('should fire an error for directed graph', function () {
    function applyPrimToDirectedGraph() {
      var graph = new _Graph2.default(true);

      (0, _prim2.default)(graph);
    }

    expect(applyPrimToDirectedGraph).toThrowError();
  });

  it('should find minimum spanning tree', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB, 2);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD, 3);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC, 3);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC, 4);
    var edgeBE = new _GraphEdge2.default(vertexB, vertexE, 3);
    var edgeDF = new _GraphEdge2.default(vertexD, vertexF, 7);
    var edgeEC = new _GraphEdge2.default(vertexE, vertexC, 1);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF, 8);
    var edgeFG = new _GraphEdge2.default(vertexF, vertexG, 9);
    var edgeFC = new _GraphEdge2.default(vertexF, vertexC, 6);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAD).addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeBE).addEdge(edgeDF).addEdge(edgeEC).addEdge(edgeEF).addEdge(edgeFC).addEdge(edgeFG);

    expect(graph.getWeight()).toEqual(46);

    var minimumSpanningTree = (0, _prim2.default)(graph);

    expect(minimumSpanningTree.getWeight()).toBe(24);
    expect(minimumSpanningTree.getAllVertices().length).toBe(graph.getAllVertices().length);
    expect(minimumSpanningTree.getAllEdges().length).toBe(graph.getAllVertices().length - 1);
    expect(minimumSpanningTree.toString()).toBe('A,B,C,E,D,F,G');
  });

  it('should find minimum spanning tree for simple graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB, 1);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD, 3);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC, 1);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD, 3);
    var edgeCD = new _GraphEdge2.default(vertexC, vertexD, 1);

    var graph = new _Graph2.default();

    graph.addEdge(edgeAB).addEdge(edgeAD).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeCD);

    expect(graph.getWeight()).toEqual(9);

    var minimumSpanningTree = (0, _prim2.default)(graph);

    expect(minimumSpanningTree.getWeight()).toBe(3);
    expect(minimumSpanningTree.getAllVertices().length).toBe(graph.getAllVertices().length);
    expect(minimumSpanningTree.getAllEdges().length).toBe(graph.getAllVertices().length - 1);
    expect(minimumSpanningTree.toString()).toBe('A,B,C,D');
  });
});