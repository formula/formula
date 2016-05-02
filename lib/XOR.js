'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XOR = XOR;

var _FLATTEN = require('./FLATTEN');

// XOR computes the exclusive or for a given set of `values`.
function XOR() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(values).reduce(function (a, b) {
    if (b) {
      return a + 1;
    }
    return a;
  }, 0) & 1;
} // Copyright 2015 Peter W Moresi