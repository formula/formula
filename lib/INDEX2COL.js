'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2COL = INDEX2COL;

var _CONSTANTS = require('./CONSTANTS');

var _INDEX2ROW = require('./INDEX2ROW');

/* Isolate the column from a cell index */
function INDEX2COL(index) {
  return index - (0, _INDEX2ROW.INDEX2ROW)(index) * _CONSTANTS.MaxCols;
}