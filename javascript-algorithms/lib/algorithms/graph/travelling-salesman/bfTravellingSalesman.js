"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = bfTravellingSalesman;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get all possible paths
 * @param {GraphVertex} startVertex
 * @param {GraphVertex[][]} [paths]
 * @param {GraphVertex[]} [path]
 */
function findAllPaths(startVertex) {
  var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  // Clone path.
  var currentPath = [].concat(_toConsumableArray(path));

  // Add startVertex to the path.
  currentPath.push(startVertex);

  // Generate visited set from path.
  var visitedSet = currentPath.reduce(function (accumulator, vertex) {
    var updatedAccumulator = _extends({}, accumulator);
    updatedAccumulator[vertex.getKey()] = vertex;

    return updatedAccumulator;
  }, {});

  // Get all unvisited neighbors of startVertex.
  var unvisitedNeighbors = startVertex.getNeighbors().filter(function (neighbor) {
    return !visitedSet[neighbor.getKey()];
  });

  // If there no unvisited neighbors then treat current path as complete and save it.
  if (!unvisitedNeighbors.length) {
    paths.push(currentPath);

    return paths;
  }

  // Go through all the neighbors.
  for (var neighborIndex = 0; neighborIndex < unvisitedNeighbors.length; neighborIndex += 1) {
    var currentUnvisitedNeighbor = unvisitedNeighbors[neighborIndex];
    findAllPaths(currentUnvisitedNeighbor, paths, currentPath);
  }

  return paths;
}

/**
 * @param {number[][]} adjacencyMatrix
 * @param {object} verticesIndices
 * @param {GraphVertex[]} cycle
 * @return {number}
 */
function getCycleWeight(adjacencyMatrix, verticesIndices, cycle) {
  var weight = 0;

  for (var cycleIndex = 1; cycleIndex < cycle.length; cycleIndex += 1) {
    var fromVertex = cycle[cycleIndex - 1];
    var toVertex = cycle[cycleIndex];
    var fromVertexIndex = verticesIndices[fromVertex.getKey()];
    var toVertexIndex = verticesIndices[toVertex.getKey()];
    weight += adjacencyMatrix[fromVertexIndex][toVertexIndex];
  }

  return weight;
}

/**
 * BRUTE FORCE approach to solve Traveling Salesman Problem.
 *
 * @param {Graph} graph
 * @return {GraphVertex[]}
 */
function bfTravellingSalesman(graph) {
  // Pick starting point from where we will traverse the graph.
  var startVertex = graph.getAllVertices()[0];

  // BRUTE FORCE.
  // Generate all possible paths from startVertex.
  var allPossiblePaths = findAllPaths(startVertex);

  // Filter out paths that are not cycles.
  var allPossibleCycles = allPossiblePaths.filter(function (path) {
    /** @var {GraphVertex} */
    var lastVertex = path[path.length - 1];
    var lastVertexNeighbors = lastVertex.getNeighbors();

    return lastVertexNeighbors.includes(startVertex);
  });

  // Go through all possible cycles and pick the one with minimum overall tour weight.
  var adjacencyMatrix = graph.getAdjacencyMatrix();
  var verticesIndices = graph.getVerticesIndices();
  var salesmanPath = [];
  var salesmanPathWeight = null;
  for (var cycleIndex = 0; cycleIndex < allPossibleCycles.length; cycleIndex += 1) {
    var currentCycle = allPossibleCycles[cycleIndex];
    var currentCycleWeight = getCycleWeight(adjacencyMatrix, verticesIndices, currentCycle);

    // If current cycle weight is smaller then previous ones treat current cycle as most optimal.
    if (salesmanPathWeight === null || currentCycleWeight < salesmanPathWeight) {
      salesmanPath = currentCycle;
      salesmanPathWeight = currentCycleWeight;
    }
  }

  // Return the solution.
  return salesmanPath;
}