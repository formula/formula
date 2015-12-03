'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2ROW = INDEX2ROW;

var _CONSTANTS = require('./CONSTANTS');

function INDEX2ROW(index) {
  return Math.floor(index / _CONSTANTS.MaxCols);
} /* Isolate the row from a cell index */