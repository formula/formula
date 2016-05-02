'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2ROW = INDEX2ROW;

var _CONSTANTS = require('./CONSTANTS');

// INDEX2COL computes the row given a cell index
function INDEX2ROW(index) {
  return Math.floor(index / _CONSTANTS.MaxCols);
} // Copyright 2015 Peter W Moresi