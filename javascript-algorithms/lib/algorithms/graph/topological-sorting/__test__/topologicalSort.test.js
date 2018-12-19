'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _topologicalSort = require('../topologicalSort');

var _topologicalSort2 = _interopRequireDefault(_topologicalSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('topologicalSort', function () {
  it('should do topological sorting on graph', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');
    var vertexG = new _GraphVertex2.default('G');
    var vertexH = new _GraphVertex2.default('H');

    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeBD = new _GraphEdge2.default(vertexB, vertexD);
    var edgeCE = new _GraphEdge2.default(vertexC, vertexE);
    var edgeDF = new _GraphEdge2.default(vertexD, vertexF);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeEH = new _GraphEdge2.default(vertexE, vertexH);
    var edgeFG = new _GraphEdge2.default(vertexF, vertexG);

    var graph = new _Graph2.default(true);

    graph.addEdge(edgeAC).addEdge(edgeBC).addEdge(edgeBD).addEdge(edgeCE).addEdge(edgeDF).addEdge(edgeEF).addEdge(edgeEH).addEdge(edgeFG);

    var sortedVertices = (0, _topologicalSort2.default)(graph);

    expect(sortedVertices).toBeDefined();
    expect(sortedVertices.length).toBe(graph.getAllVertices().length);
    expect(sortedVertices).toEqual([vertexB, vertexD, vertexA, vertexC, vertexE, vertexH, vertexF, vertexG]);
  });
});