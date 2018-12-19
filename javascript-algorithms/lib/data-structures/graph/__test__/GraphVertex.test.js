'use strict';

var _GraphVertex = require('../GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

var _GraphEdge = require('../GraphEdge');

var _GraphEdge2 = _interopRequireDefault(_GraphEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('GraphVertex', function () {
  it('should throw an error when trying to create vertex without value', function () {
    var vertex = null;

    function createEmptyVertex() {
      vertex = new _GraphVertex2.default();
    }

    expect(vertex).toBeNull();
    expect(createEmptyVertex).toThrow();
  });

  it('should create graph vertex', function () {
    var vertex = new _GraphVertex2.default('A');

    expect(vertex).toBeDefined();
    expect(vertex.value).toBe('A');
    expect(vertex.toString()).toBe('A');
    expect(vertex.getKey()).toBe('A');
    expect(vertex.edges.toString()).toBe('');
    expect(vertex.getEdges()).toEqual([]);
  });

  it('should add edges to vertex and check if it exists', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges().length).toBe(1);
    expect(vertexA.getEdges()[0].toString()).toBe('A_B');
  });

  it('should delete edges from vertex', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    vertexA.addEdge(edgeAB).addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);

    expect(vertexA.hasEdge(edgeAC)).toBe(true);
    expect(vertexC.hasEdge(edgeAC)).toBe(false);

    expect(vertexA.getEdges().length).toBe(2);

    expect(vertexA.getEdges()[0].toString()).toBe('A_B');
    expect(vertexA.getEdges()[1].toString()).toBe('A_C');

    vertexA.deleteEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.hasEdge(edgeAC)).toBe(true);
    expect(vertexA.getEdges()[0].toString()).toBe('A_C');

    vertexA.deleteEdge(edgeAC);
    expect(vertexA.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.hasEdge(edgeAC)).toBe(false);
    expect(vertexA.getEdges().length).toBe(0);
  });

  it('should delete all edges from vertex', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    vertexA.addEdge(edgeAB).addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);

    expect(vertexA.hasEdge(edgeAC)).toBe(true);
    expect(vertexC.hasEdge(edgeAC)).toBe(false);

    expect(vertexA.getEdges().length).toBe(2);

    vertexA.deleteAllEdges();

    expect(vertexA.hasEdge(edgeAB)).toBe(false);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);

    expect(vertexA.hasEdge(edgeAC)).toBe(false);
    expect(vertexC.hasEdge(edgeAC)).toBe(false);

    expect(vertexA.getEdges().length).toBe(0);
  });

  it('should return vertex neighbors in case if current node is start one', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    var edgeAC = new _GraphEdge2.default(vertexA, vertexC);
    vertexA.addEdge(edgeAB).addEdge(edgeAC);

    expect(vertexB.getNeighbors()).toEqual([]);

    var neighbors = vertexA.getNeighbors();

    expect(neighbors.length).toBe(2);
    expect(neighbors[0]).toEqual(vertexB);
    expect(neighbors[1]).toEqual(vertexC);
  });

  it('should return vertex neighbors in case if current node is end one', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeBA = new _GraphEdge2.default(vertexB, vertexA);
    var edgeCA = new _GraphEdge2.default(vertexC, vertexA);
    vertexA.addEdge(edgeBA).addEdge(edgeCA);

    expect(vertexB.getNeighbors()).toEqual([]);

    var neighbors = vertexA.getNeighbors();

    expect(neighbors.length).toBe(2);
    expect(neighbors[0]).toEqual(vertexB);
    expect(neighbors[1]).toEqual(vertexC);
  });

  it('should check if vertex has specific neighbor', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasNeighbor(vertexB)).toBe(true);
    expect(vertexA.hasNeighbor(vertexC)).toBe(false);
  });

  it('should edge by vertex', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');
    var vertexC = new _GraphVertex2.default('C');

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
    expect(vertexA.findEdge(vertexC)).toBeNull();
  });

  it('should calculate vertex degree', function () {
    var vertexA = new _GraphVertex2.default('A');
    var vertexB = new _GraphVertex2.default('B');

    expect(vertexA.getDegree()).toBe(0);

    var edgeAB = new _GraphEdge2.default(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.getDegree()).toBe(1);

    var edgeBA = new _GraphEdge2.default(vertexB, vertexA);
    vertexA.addEdge(edgeBA);

    expect(vertexA.getDegree()).toBe(2);

    vertexA.addEdge(edgeAB);
    expect(vertexA.getDegree()).toBe(3);

    expect(vertexA.getEdges().length).toEqual(3);
  });
});