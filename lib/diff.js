"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diff;

var _reduce = _interopRequireDefault(require("./reduce"));

var _keys = _interopRequireDefault(require("./keys"));

var _assign = _interopRequireDefault(require("./assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function diff(a, b) {
  var keysA = (0, _keys.default)(a),
      keysB = (0, _keys.default)(b),
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
    diff: (0, _reduce.default)(Diff, function (x, y) {
      var diff = {};
      diff[y] = {
        left: a[y],
        right: b[y]
      };
      return (0, _assign.default)({}, x, diff);
    }, {})
  };
}
