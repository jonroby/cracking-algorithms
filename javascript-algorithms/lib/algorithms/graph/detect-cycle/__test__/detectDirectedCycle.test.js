'use strict';

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _detectDirectedCycle = require('../detectDirectedCycle');

var _detectDirectedCycle2 = _interopRequireDefault(_detectDirectedCycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('detectDirectedCycle', function () {
  it('should detect directed cycle', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');
    var vertexD = new _GraphVertex2.default('D');
    var vertexE = new _GraphVertex2.default('E');
    var vertexF = new _GraphVertex2.default('F');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeBC = new _GraphEdge2.default(vertexB, vertexC);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    var edgeDA = new _GraphEdge2.default(vertexD, vertexA);
    var edgeDE = new _GraphEdge2.default(vertexD, vertexE);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeFD = new _GraphEdge2.default(vertexF, vertexD);

    var graph = new _Graph2.default(true);
    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeAC).addEdge(edgeDA).addEdge(edgeDE).addEdge(edgeEF);

    expect((0, _detectDirectedCycle2.default)(graph)).toBeNull();

    graph.addEdge(edgeFD);

    expect((0, _detectDirectedCycle2.default)(graph)).toEqual({
      D: vertexF,
      F: vertexE,
      E: vertexD
    });
  });
});