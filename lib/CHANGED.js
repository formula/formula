'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGED = CHANGED;

var _UNIQUE = require('./UNIQUE');

// CHANGED computes the list of keys that are different between two objects.
function CHANGED(a, b) {

  // Compute the keys in object a and b.
  var keysA = Object.keys(a),
      keysB = Object.keys(b);

  // Find the unique set of properties comparing a to b and b to a.
  return (0, _UNIQUE.UNIQUE)(keysA.filter(function (n) {
    return a[n] !== b[n];
  }).concat(keysB.filter(function (n) {
    return a[n] !== b[n];
  })));
} // Copyright 2015 Peter W Moresi