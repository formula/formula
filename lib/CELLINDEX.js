'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CELLINDEX = CELLINDEX;

var _CONSTANTS = require('./CONSTANTS');

// CELLINDEX computes the index for row and column in a 2 dimensional array.
function CELLINDEX(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor(row * _CONSTANTS.MaxCols + col);
} // Copyright 2015 Peter W Moresi