'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diff;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function diff(a, b) {
  var keysA = (0, _keys2.default)(a),
      keysB = (0, _keys2.default)(b),
      InA = keysB.filter(function (n) {
    return keysA.indexOf(n) > -1;
  }),
      NotInA = keysB.filter(function (n) {
    return keysA.indexOf(n) === -1;
  }),
      NotInB = keysA.filter(function (n) {
    return keysB.indexOf(n) === -1;
  }),
      Diff = InA.filter(function (n) {
    return a[n] !== b[n];
  });

  return {
    unique_left: NotInA,
    unique_right: NotInB,
    diff: (0, _reduce2.default)(Diff, function (x, y) {
      var diff = {};
      diff[y] = { left: a[y], right: b[y] };
      return (0, _assign2.default)({}, x, diff);
    }, {})
  };
} // Copyright 2015 JC Fisher
module.exports = exports['default'];