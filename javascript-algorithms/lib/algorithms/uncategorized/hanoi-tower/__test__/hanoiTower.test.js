'use strict';

var _hanoiTower = require('../hanoiTower');

var _hanoiTower2 = _interopRequireDefault(_hanoiTower);

var _Stack = require('../../../../data-structures/stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('hanoiTower', function () {
  it('should solve tower of hanoi puzzle with 2 discs', function () {
    var moveCallback = jest.fn();
    var numberOfDiscs = 2;

    var fromPole = new _Stack2.default();
    var withPole = new _Stack2.default();
    var toPole = new _Stack2.default();

    (0, _hanoiTower2.default)({
      numberOfDiscs: numberOfDiscs,
      moveCallback: moveCallback,
      fromPole: fromPole,
      withPole: withPole,
      toPole: toPole
    });

    expect(moveCallback).toHaveBeenCalledTimes(Math.pow(2, numberOfDiscs) - 1);

    expect(fromPole.toArray()).toEqual([]);
    expect(toPole.toArray()).toEqual([1, 2]);

    expect(moveCallback.mock.calls[0][0]).toBe(1);
    expect(moveCallback.mock.calls[0][1]).toEqual([1, 2]);
    expect(moveCallback.mock.calls[0][2]).toEqual([]);

    expect(moveCallback.mock.calls[1][0]).toBe(2);
    expect(moveCallback.mock.calls[1][1]).toEqual([2]);
    expect(moveCallback.mock.calls[1][2]).toEqual([]);

    expect(moveCallback.mock.calls[2][0]).toBe(1);
    expect(moveCallback.mock.calls[2][1]).toEqual([1]);
    expect(moveCallback.mock.calls[2][2]).toEqual([2]);
  });

  it('should solve tower of hanoi puzzle with 3 discs', function () {
    var moveCallback = jest.fn();
    var numberOfDiscs = 3;

    (0, _hanoiTower2.default)({
      numberOfDiscs: numberOfDiscs,
      moveCallback: moveCallback
    });

    expect(moveCallback).toHaveBeenCalledTimes(Math.pow(2, numberOfDiscs) - 1);
  });

  it('should solve tower of hanoi puzzle with 6 discs', function () {
    var moveCallback = jest.fn();
    var numberOfDiscs = 6;

    (0, _hanoiTower2.default)({
      numberOfDiscs: numberOfDiscs,
      moveCallback: moveCallback
    });

    expect(moveCallback).toHaveBeenCalledTimes(Math.pow(2, numberOfDiscs) - 1);
  });
});