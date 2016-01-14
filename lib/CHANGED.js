'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGED = CHANGED;

var _UNIQUE = require('./UNIQUE');

function CHANGED(a, b) {
  var keysA = Object.keys(a),
      keysB = Object.keys(b),
      InA = keysB.filter(function (n) {
    return keysA.indexOf(n) > -1;
  }),
      DiffA = InA.filter(function (n) {
    return a[n] !== b[n];
  });

  return DiffA;
}