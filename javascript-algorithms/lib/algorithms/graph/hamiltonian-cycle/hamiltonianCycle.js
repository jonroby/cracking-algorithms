'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hamiltonianCycle;

var _GraphVertex = require('../../../data-structures/graph/GraphVertex');

var _GraphVertex2 = _interopRequireDefault(_GraphVertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {number[][]} adjacencyMatrix
 * @param {object} verticesIndices
 * @param {GraphVertex[]} cycle
 * @param {GraphVertex} vertexCandidate
 * @return {boolean}
 */
function isSafe(adjacencyMatrix, verticesIndices, cycle, vertexCandidate) {
  var endVertex = cycle[cycle.length - 1];

  // Get end and candidate vertices indices in adjacency matrix.
  var candidateVertexAdjacencyIndex = verticesIndices[vertexCandidate.getKey()];
  var endVertexAdjacencyIndex = verticesIndices[endVertex.getKey()];

  // Check if last vertex in the path and candidate vertex are adjacent.
  if (adjacencyMatrix[endVertexAdjacencyIndex][candidateVertexAdjacencyIndex] === Infinity) {
    return false;
  }

  // Check if vertexCandidate is being added to the path for the first time.
  var candidateDuplicate = cycle.find(function (vertex) {
    return vertex.getKey() === vertexCandidate.getKey();
  });

  return !candidateDuplicate;
}

/**
 * @param {number[][]} adjacencyMatrix
 * @param {object} verticesIndices
 * @param {GraphVertex[]} cycle
 * @return {boolean}
 */
function isCycle(adjacencyMatrix, verticesIndices, cycle) {
  // Check if first and last vertices in hamiltonian path are adjacent.

  // Get start and end vertices from the path.
  var startVertex = cycle[0];
  var endVertex = cycle[cycle.length - 1];

  // Get start/end vertices indices in adjacency matrix.
  var startVertexAdjacencyIndex = verticesIndices[startVertex.getKey()];
  var endVertexAdjacencyIndex = verticesIndices[endVertex.getKey()];

  // Check if we can go from end vertex to the start one.
  return adjacencyMatrix[endVertexAdjacencyIndex][startVertexAdjacencyIndex] !== Infinity;
}

/**
 * @param {number[][]} adjacencyMatrix
 * @param {GraphVertex[]} vertices
 * @param {object} verticesIndices
 * @param {GraphVertex[][]} cycles
 * @param {GraphVertex[]} cycle
 */
function hamiltonianCycleRecursive(_ref) {
  var adjacencyMatrix = _ref.adjacencyMatrix,
      vertices = _ref.vertices,
      verticesIndices = _ref.verticesIndices,
      cycles = _ref.cycles,
      cycle = _ref.cycle;

  // Clone cycle in order to prevent it from modification by other DFS branches.
  var currentCycle = [].concat(_toConsumableArray(cycle)).map(function (vertex) {
    return new _GraphVertex2.default(vertex.value);
  });

  if (vertices.length === currentCycle.length) {
    // Hamiltonian path is found.
    // Now we need to check if it is cycle or not.
    if (isCycle(adjacencyMatrix, verticesIndices, currentCycle)) {
      // Another solution has been found. Save it.
      cycles.push(currentCycle);
    }
    return;
  }

  for (var vertexIndex = 0; vertexIndex < vertices.length; vertexIndex += 1) {
    // Get vertex candidate that we will try to put into next path step and see if it fits.
    var vertexCandidate = vertices[vertexIndex];

    // Check if it is safe to put vertex candidate to cycle.
    if (isSafe(adjacencyMatrix, verticesIndices, currentCycle, vertexCandidate)) {
      // Add candidate vertex to cycle path.
      currentCycle.push(vertexCandidate);

      // Try to find other vertices in cycle.
      hamiltonianCycleRecursive({
        adjacencyMatrix: adjacencyMatrix,
        vertices: vertices,
        verticesIndices: verticesIndices,
        cycles: cycles,
        cycle: currentCycle
      });

      // BACKTRACKING.
      // Remove candidate vertex from cycle path in order to try another one.
      currentCycle.pop();
    }
  }
}

/**
 * @param {Graph} graph
 * @return {GraphVertex[][]}
 */
function hamiltonianCycle(graph) {
  // Gather some information about the graph that we will need to during
  // the problem solving.
  var verticesIndices = graph.getVerticesIndices();
  var adjacencyMatrix = graph.getAdjacencyMatrix();
  var vertices = graph.getAllVertices();

  // Define start vertex. We will always pick the first one
  // this it doesn't matter which vertex to pick in a cycle.
  // Every vertex is in a cycle so we can start from any of them.
  var startVertex = vertices[0];

  // Init cycles array that will hold all solutions.
  var cycles = [];

  // Init cycle array that will hold current cycle path.
  var cycle = [startVertex];

  // Try to find cycles recursively in Depth First Search order.
  hamiltonianCycleRecursive({
    adjacencyMatrix: adjacencyMatrix,
    vertices: vertices,
    verticesIndices: verticesIndices,
    cycles: cycles,
    cycle: cycle
  });

  // Return found cycles.
  return cycles;
}