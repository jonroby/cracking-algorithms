'use strict';

var _Graph = require('../../../../data-structures/graph/Graph');

var _Graph2 = _interopRequireDefault(_Graph);

var _GraphVertex = require('../../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../../../../data-structures/graph/GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

var _breadthFirstSearch = require('../breadthFirstSearch');

var _breadthFirstSearch2 = _interopRequireDefault(_breadthFirstSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('breadthFirstSearch', function () {
  it('should perform BFS operation on graph', function () {
    var graph = new _Graph2.default(true);

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
    var edgeCG = new _GraphEdge2.default(vertexC, vertexG);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeFD = new _GraphEdge2.default(vertexF, vertexD);
    var edgeDH = new _GraphEdge2.default(vertexD, vertexH);
    var edgeGH = new _GraphEdge2.default(vertexG, vertexH);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCG).addEdge(edgeAD).addEdge(edgeAE).addEdge(edgeEF).addEdge(edgeFD).addEdge(edgeDH).addEdge(edgeGH);

    expect(graph.toString()).toBe('A,B,C,G,D,E,F,H');

    var enterVertexCallback = jest.fn();
    var leaveVertexCallback = jest.fn();

    // Traverse graphs without callbacks first.
    (0, _breadthFirstSearch2.default)(graph, vertexA);

    // Traverse graph with enterVertex and leaveVertex callbacks.
    (0, _breadthFirstSearch2.default)(graph, vertexA, {
      enterVertex: enterVertexCallback,
      leaveVertex: leaveVertexCallback
    });

    expect(enterVertexCallback).toHaveBeenCalledTimes(8);
    expect(leaveVertexCallback).toHaveBeenCalledTimes(8);

    var enterVertexParamsMap = [{ currentVertex: vertexA, previousVertex: null }, { currentVertex: vertexB, previousVertex: vertexA }, { currentVertex: vertexD, previousVertex: vertexB }, { currentVertex: vertexE, previousVertex: vertexD }, { currentVertex: vertexC, previousVertex: vertexE }, { currentVertex: vertexH, previousVertex: vertexC }, { currentVertex: vertexF, previousVertex: vertexH }, { currentVertex: vertexG, previousVertex: vertexF }];

    for (var callIndex = 0; callIndex < graph.getAllVertices().length; callIndex += 1) {
      var params = enterVertexCallback.mock.calls[callIndex][0];
      expect(params.currentVertex).toEqual(enterVertexParamsMap[callIndex].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexParamsMap[callIndex].previousVertex);
    }

    var leaveVertexParamsMap = [{ currentVertex: vertexA, previousVertex: null }, { currentVertex: vertexB, previousVertex: vertexA }, { currentVertex: vertexD, previousVertex: vertexB }, { currentVertex: vertexE, previousVertex: vertexD }, { currentVertex: vertexC, previousVertex: vertexE }, { currentVertex: vertexH, previousVertex: vertexC }, { currentVertex: vertexF, previousVertex: vertexH }, { currentVertex: vertexG, previousVertex: vertexF }];

    for (var _callIndex = 0; _callIndex < graph.getAllVertices().length; _callIndex += 1) {
      var _params = leaveVertexCallback.mock.calls[_callIndex][0];
      expect(_params.currentVertex).toEqual(leaveVertexParamsMap[_callIndex].currentVertex);
      expect(_params.previousVertex).toEqual(leaveVertexParamsMap[_callIndex].previousVertex);
    }
  });

  it('should allow to create custom vertex visiting logic', function () {
    var graph = new _Graph2.default(true);

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
    var edgeCG = new _GraphEdge2.default(vertexC, vertexG);
    var edgeAD = new _GraphEdge2.default(vertexA, vertexD);
    var edgeAE = new _GraphEdge2.default(vertexA, vertexE);
    var edgeEF = new _GraphEdge2.default(vertexE, vertexF);
    var edgeFD = new _GraphEdge2.default(vertexF, vertexD);
    var edgeDH = new _GraphEdge2.default(vertexD, vertexH);
    var edgeGH = new _GraphEdge2.default(vertexG, vertexH);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCG).addEdge(edgeAD).addEdge(edgeAE).addEdge(edgeEF).addEdge(edgeFD).addEdge(edgeDH).addEdge(edgeGH);

    expect(graph.toString()).toBe('A,B,C,G,D,E,F,H');

    var enterVertexCallback = jest.fn();
    var leaveVertexCallback = jest.fn();

    // Traverse graph with enterVertex and leaveVertex callbacks.
    (0, _breadthFirstSearch2.default)(graph, vertexA, {
      enterVertex: enterVertexCallback,
      leaveVertex: leaveVertexCallback,
      allowTraversal: function allowTraversal(_ref) {
        var currentVertex = _ref.currentVertex,
            nextVertex = _ref.nextVertex;

        return !(currentVertex === vertexA && nextVertex === vertexB);
      }
    });

    expect(enterVertexCallback).toHaveBeenCalledTimes(7);
    expect(leaveVertexCallback).toHaveBeenCalledTimes(7);

    var enterVertexParamsMap = [{ currentVertex: vertexA, previousVertex: null }, { currentVertex: vertexD, previousVertex: vertexA }, { currentVertex: vertexE, previousVertex: vertexD }, { currentVertex: vertexH, previousVertex: vertexE }, { currentVertex: vertexF, previousVertex: vertexH }, { currentVertex: vertexD, previousVertex: vertexF }, { currentVertex: vertexH, previousVertex: vertexD }];

    for (var callIndex = 0; callIndex < 7; callIndex += 1) {
      var params = enterVertexCallback.mock.calls[callIndex][0];
      expect(params.currentVertex).toEqual(enterVertexParamsMap[callIndex].currentVertex);
      expect(params.previousVertex).toEqual(enterVertexParamsMap[callIndex].previousVertex);
    }

    var leaveVertexParamsMap = [{ currentVertex: vertexA, previousVertex: null }, { currentVertex: vertexD, previousVertex: vertexA }, { currentVertex: vertexE, previousVertex: vertexD }, { currentVertex: vertexH, previousVertex: vertexE }, { currentVertex: vertexF, previousVertex: vertexH }, { currentVertex: vertexD, previousVertex: vertexF }, { currentVertex: vertexH, previousVertex: vertexD }];

    for (var _callIndex2 = 0; _callIndex2 < 7; _callIndex2 += 1) {
      var _params2 = leaveVertexCallback.mock.calls[_callIndex2][0];
      expect(_params2.currentVertex).toEqual(leaveVertexParamsMap[_callIndex2].currentVertex);
      expect(_params2.previousVertex).toEqual(leaveVertexParamsMap[_callIndex2].previousVertex);
    }
  });
});