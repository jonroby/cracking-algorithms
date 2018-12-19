'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = eulerianPath;

var _graphBridges = require('../bridges/graphBridges');

var _graphBridges2 = _interopRequireDefault(_graphBridges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fleury's algorithm of finding Eulerian Path (visit all graph edges exactly once).
 *
 * @param {Graph} graph
 * @return {GraphVertex[]}
 */
function eulerianPath(graph) {
  var eulerianPathVertices = [];

  // Set that contains all vertices with even rank (number of neighbors).
  var evenRankVertices = {};

  // Set that contains all vertices with odd rank (number of neighbors).
  var oddRankVertices = {};

  // Set of all not visited edges.
  var notVisitedEdges = {};
  graph.getAllEdges().forEach(function (vertex) {
    notVisitedEdges[vertex.getKey()] = vertex;
  });

  // Detect whether graph contains Eulerian Circuit or Eulerian Path or none of them.
  /** @params {GraphVertex} vertex */
  graph.getAllVertices().forEach(function (vertex) {
    if (vertex.getDegree() % 2) {
      oddRankVertices[vertex.getKey()] = vertex;
    } else {
      evenRankVertices[vertex.getKey()] = vertex;
    }
  });

  // Check whether we're dealing with Eulerian Circuit or Eulerian Path only.
  // Graph would be an Eulerian Circuit in case if all its vertices has even degree.
  // If not all vertices have even degree then graph must contain only two odd-degree
  // vertices in order to have Euler Path.
  var isCircuit = !Object.values(oddRankVertices).length;

  if (!isCircuit && Object.values(oddRankVertices).length !== 2) {
    throw new Error('Eulerian path must contain two odd-ranked vertices');
  }

  // Pick start vertex for traversal.
  var startVertex = null;

  if (isCircuit) {
    // For Eulerian Circuit it doesn't matter from what vertex to start thus we'll just
    // peek a first node.
    var evenVertexKey = Object.keys(evenRankVertices)[0];
    startVertex = evenRankVertices[evenVertexKey];
  } else {
    // For Eulerian Path we need to start from one of two odd-degree vertices.
    var oddVertexKey = Object.keys(oddRankVertices)[0];
    startVertex = oddRankVertices[oddVertexKey];
  }

  // Start traversing the graph.
  var currentVertex = startVertex;

  var _loop = function _loop() {
    // Add current vertex to Eulerian path.
    eulerianPathVertices.push(currentVertex);

    // Detect all bridges in graph.
    // We need to do it in order to not delete bridges if there are other edges
    // exists for deletion.
    var bridges = (0, _graphBridges2.default)(graph);

    // Peek the next edge to delete from graph.
    var currentEdges = currentVertex.getEdges();
    /** @var {GraphEdge} edgeToDelete */
    var edgeToDelete = null;
    if (currentEdges.length === 1) {
      var _currentEdges = _slicedToArray(currentEdges, 1);
      // If there is only one edge left we need to peek it.


      edgeToDelete = _currentEdges[0];
    } else {
      var _currentEdges$filter = currentEdges.filter(function (edge) {
        return !bridges[edge.getKey()];
      });
      // If there are many edges left then we need to peek any of those except bridges.


      var _currentEdges$filter2 = _slicedToArray(_currentEdges$filter, 1);

      edgeToDelete = _currentEdges$filter2[0];
    }

    // Detect next current vertex.
    if (currentVertex.getKey() === edgeToDelete.startVertex.getKey()) {
      currentVertex = edgeToDelete.endVertex;
    } else {
      currentVertex = edgeToDelete.startVertex;
    }

    // Delete edge from not visited edges set.
    delete notVisitedEdges[edgeToDelete.getKey()];

    // If last edge were deleted then add finish vertex to Eulerian Path.
    if (Object.values(notVisitedEdges).length === 0) {
      eulerianPathVertices.push(currentVertex);
    }

    // Delete the edge from graph.
    graph.deleteEdge(edgeToDelete);
  };

  while (Object.values(notVisitedEdges).length) {
    _loop();
  }

  return eulerianPathVertices;
}