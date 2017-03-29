'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index2row;

var _constants = require('./constants');

// INDEX2COL computes the row given a cell index
function index2row(index) {
  return Math.floor(index / _constants.MaxCols);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];