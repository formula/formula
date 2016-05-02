'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NE = NE;

var _EQ = require('./EQ');

// NE returns true when a is not equal to b.
function NE(a, b) {
  return !(0, _EQ.EQ)(a, b);
} // Copyright 2015 Peter W Moresi