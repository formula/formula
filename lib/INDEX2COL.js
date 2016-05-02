'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2COL = INDEX2COL;

var _CONSTANTS = require('./CONSTANTS');

var _INDEX2ROW = require('./INDEX2ROW');

// INDEX2COL computes the column given a cell index
// Copyright 2015 Peter W Moresi

function INDEX2COL(index) {
  return index - (0, _INDEX2ROW.INDEX2ROW)(index) * _CONSTANTS.MaxCols;
}