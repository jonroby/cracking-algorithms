"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = liuHui;
/*
 * Let circleRadius is the radius of circle.
 * circleRadius is also the side length of the inscribed hexagon
 */
var circleRadius = 1;

/**
 * @param {number} sideLength
 * @param {number} splitCounter
 * @return {number}
 */
function getNGonSideLength(sideLength, splitCounter) {
  if (splitCounter <= 0) {
    return sideLength;
  }

  var halfSide = sideLength / 2;

  // Liu Hui used the Gou Gu (Pythagorean theorem) theorem repetitively.
  var perpendicular = Math.sqrt(Math.pow(circleRadius, 2) - Math.pow(halfSide, 2));
  var excessRadius = circleRadius - perpendicular;
  var splitSideLength = Math.sqrt(Math.pow(excessRadius, 2) + Math.pow(halfSide, 2));

  return getNGonSideLength(splitSideLength, splitCounter - 1);
}

/**
 * @param {number} splitCount
 * @return {number}
 */
function getNGonSideCount(splitCount) {
  // Liu Hui began with an inscribed hexagon (6-gon).
  var hexagonSidesCount = 6;

  // On every split iteration we make N-gons: 6-gon, 12-gon, 24-gon, 48-gon and so on.
  return hexagonSidesCount * (splitCount ? Math.pow(2, splitCount) : 1);
}

/**
 * Calculate the π value using Liu Hui's π algorithm
 *
 * @param {number} splitCount - number of times we're going to split 6-gon.
 *  On each split we will receive 12-gon, 24-gon and so on.
 * @return {number}
 */
function liuHui() {
  var splitCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var nGonSideLength = getNGonSideLength(circleRadius, splitCount - 1);
  var nGonSideCount = getNGonSideCount(splitCount - 1);
  var nGonPerimeter = nGonSideLength * nGonSideCount;
  var approximateCircleArea = nGonPerimeter / 2 * circleRadius;

  // Return approximate value of pi.
  return approximateCircleArea / Math.pow(circleRadius, 2);
}