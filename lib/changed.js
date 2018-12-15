"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changed;

var _unique = _interopRequireDefault(require("./unique"));

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Computes the list of keys that are different between two objects.
function changed(a, b) {
  // Compute the keys in object a and b.
  var keysA = (0, _keys.default)(a),
      keysB = (0, _keys.default)(b); // Find the unique set of properties comparing a to b and b to a.

  return (0, _unique.default)(keysA.filter(function (n) {
    return a[n] !== b[n];
  }).concat(keysB.filter(function (n) {
    return a[n] !== b[n];
  })));
}
