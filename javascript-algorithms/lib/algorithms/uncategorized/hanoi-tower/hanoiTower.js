'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hanoiTower;

var _Stack = require('../../../data-structures/stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {number} numberOfDiscs
 * @param {Stack} fromPole
 * @param {Stack} withPole
 * @param {Stack} toPole
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 */
function hanoiTowerRecursive(_ref) {
  var numberOfDiscs = _ref.numberOfDiscs,
      fromPole = _ref.fromPole,
      withPole = _ref.withPole,
      toPole = _ref.toPole,
      moveCallback = _ref.moveCallback;

  if (numberOfDiscs === 1) {
    // Base case with just one disc.
    moveCallback(fromPole.peek(), fromPole.toArray(), toPole.toArray());
    var disc = fromPole.pop();
    toPole.push(disc);
  } else {
    // In case if there are more discs then move them recursively.

    // Expose the bottom disc on fromPole stack.
    hanoiTowerRecursive({
      numberOfDiscs: numberOfDiscs - 1,
      fromPole: fromPole,
      withPole: toPole,
      toPole: withPole,
      moveCallback: moveCallback
    });

    // Move the disc that was exposed to its final destination.
    hanoiTowerRecursive({
      numberOfDiscs: 1,
      fromPole: fromPole,
      withPole: withPole,
      toPole: toPole,
      moveCallback: moveCallback
    });

    // Move temporary tower from auxiliary pole to its final destination.
    hanoiTowerRecursive({
      numberOfDiscs: numberOfDiscs - 1,
      fromPole: withPole,
      withPole: fromPole,
      toPole: toPole,
      moveCallback: moveCallback
    });
  }
}

/**
 * @param {number} numberOfDiscs
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 * @param {Stack} [fromPole]
 * @param {Stack} [withPole]
 * @param {Stack} [toPole]
 */
function hanoiTower(_ref2) {
  var numberOfDiscs = _ref2.numberOfDiscs,
      moveCallback = _ref2.moveCallback,
      _ref2$fromPole = _ref2.fromPole,
      fromPole = _ref2$fromPole === undefined ? new _Stack2.default() : _ref2$fromPole,
      _ref2$withPole = _ref2.withPole,
      withPole = _ref2$withPole === undefined ? new _Stack2.default() : _ref2$withPole,
      _ref2$toPole = _ref2.toPole,
      toPole = _ref2$toPole === undefined ? new _Stack2.default() : _ref2$toPole;

  // Each of three poles of Tower of Hanoi puzzle is represented as a stack
  // that might contain elements (discs). Each disc is represented as a number.
  // Larger discs have bigger number equivalent.

  // Let's create the discs and put them to the fromPole.
  for (var discSize = numberOfDiscs; discSize > 0; discSize -= 1) {
    fromPole.push(discSize);
  }

  hanoiTowerRecursive({
    numberOfDiscs: numberOfDiscs,
    fromPole: fromPole,
    withPole: withPole,
    toPole: toPole,
    moveCallback: moveCallback
  });
}