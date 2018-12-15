"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cellindex;

var _constants = require("./constants");

// Copyright 2015-2018 FormBucket LLC
// Computes the index for row and column in a 2 dimensional array.
function cellindex(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor(row * _constants.MaxCols + col);
}
