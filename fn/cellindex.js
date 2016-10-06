'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cellindex;

var _constants = require('./constants');

// CELLINDEX computes the index for row and column in a 2 dimensional array.
function cellindex(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor(row * _constants.MaxCols + col);
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];