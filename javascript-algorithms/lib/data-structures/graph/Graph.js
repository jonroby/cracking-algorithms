'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
  /**
   * @param {boolean} isDirected
   */
  function Graph() {
    var isDirected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Graph);

    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  /**
   * @param {GraphVertex} newVertex
   * @returns {Graph}
   */


  _createClass(Graph, [{
    key: 'addVertex',
    value: function addVertex(newVertex) {
      this.vertices[newVertex.getKey()] = newVertex;

      return this;
    }

    /**
     * @param {string} vertexKey
     * @returns GraphVertex
     */

  }, {
    key: 'getVertexByKey',
    value: function getVertexByKey(vertexKey) {
      return this.vertices[vertexKey];
    }

    /**
     * @param {GraphVertex} vertex
     * @returns {GraphVertex[]}
     */

  }, {
    key: 'getNeighbors',
    value: function getNeighbors(vertex) {
      return vertex.getNeighbors();
    }

    /**
     * @return {GraphVertex[]}
     */

  }, {
    key: 'getAllVertices',
    value: function getAllVertices() {
      return Object.values(this.vertices);
    }

    /**
     * @return {GraphEdge[]}
     */

  }, {
    key: 'getAllEdges',
    value: function getAllEdges() {
      return Object.values(this.edges);
    }

    /**
     * @param {GraphEdge} edge
     * @returns {Graph}
     */

  }, {
    key: 'addEdge',
    value: function addEdge(edge) {
      // Try to find and end start vertices.
      var startVertex = this.getVertexByKey(edge.startVertex.getKey());
      var endVertex = this.getVertexByKey(edge.endVertex.getKey());

      // Insert start vertex if it wasn't inserted.
      if (!startVertex) {
        this.addVertex(edge.startVertex);
        startVertex = this.getVertexByKey(edge.startVertex.getKey());
      }

      // Insert end vertex if it wasn't inserted.
      if (!endVertex) {
        this.addVertex(edge.endVertex);
        endVertex = this.getVertexByKey(edge.endVertex.getKey());
      }

      // Check if edge has been already added.
      if (this.edges[edge.getKey()]) {
        throw new Error('Edge has already been added before');
      } else {
        this.edges[edge.getKey()] = edge;
      }

      // Add edge to the vertices.
      if (this.isDirected) {
        // If graph IS directed then add the edge only to start vertex.
        startVertex.addEdge(edge);
      } else {
        // If graph ISN'T directed then add the edge to both vertices.
        startVertex.addEdge(edge);
        endVertex.addEdge(edge);
      }

      return this;
    }

    /**
     * @param {GraphEdge} edge
     */

  }, {
    key: 'deleteEdge',
    value: function deleteEdge(edge) {
      // Delete edge from the list of edges.
      if (this.edges[edge.getKey()]) {
        delete this.edges[edge.getKey()];
      } else {
        throw new Error('Edge not found in graph');
      }

      // Try to find and end start vertices and delete edge from them.
      var startVertex = this.getVertexByKey(edge.startVertex.getKey());
      var endVertex = this.getVertexByKey(edge.endVertex.getKey());

      startVertex.deleteEdge(edge);
      endVertex.deleteEdge(edge);
    }

    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @return {(GraphEdge|null)}
     */

  }, {
    key: 'findEdge',
    value: function findEdge(startVertex, endVertex) {
      var vertex = this.getVertexByKey(startVertex.getKey());

      if (!vertex) {
        return null;
      }

      return vertex.findEdge(endVertex);
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getWeight',
    value: function getWeight() {
      return this.getAllEdges().reduce(function (weight, graphEdge) {
        return weight + graphEdge.weight;
      }, 0);
    }

    /**
     * Reverse all the edges in directed graph.
     * @return {Graph}
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      var _this = this;

      /** @param {GraphEdge} edge */
      this.getAllEdges().forEach(function (edge) {
        // Delete straight edge from graph and from vertices.
        _this.deleteEdge(edge);

        // Reverse the edge.
        edge.reverse();

        // Add reversed edge back to the graph and its vertices.
        _this.addEdge(edge);
      });

      return this;
    }

    /**
     * @return {object}
     */

  }, {
    key: 'getVerticesIndices',
    value: function getVerticesIndices() {
      var verticesIndices = {};
      this.getAllVertices().forEach(function (vertex, index) {
        verticesIndices[vertex.getKey()] = index;
      });

      return verticesIndices;
    }

    /**
     * @return {*[][]}
     */

  }, {
    key: 'getAdjacencyMatrix',
    value: function getAdjacencyMatrix() {
      var _this2 = this;

      var vertices = this.getAllVertices();
      var verticesIndices = this.getVerticesIndices();

      // Init matrix with infinities meaning that there is no ways of
      // getting from one vertex to another yet.
      var adjacencyMatrix = Array(vertices.length).fill(null).map(function () {
        return Array(vertices.length).fill(Infinity);
      });

      // Fill the columns.
      vertices.forEach(function (vertex, vertexIndex) {
        vertex.getNeighbors().forEach(function (neighbor) {
          var neighborIndex = verticesIndices[neighbor.getKey()];
          adjacencyMatrix[vertexIndex][neighborIndex] = _this2.findEdge(vertex, neighbor).weight;
        });
      });

      return adjacencyMatrix;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return Object.keys(this.vertices).toString();
    }
  }]);

  return Graph;
}();

exports.default = Graph;