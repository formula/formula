"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index2row;

var _constants = require("./constants");

// Copyright 2015-2018 FormBucket LLC
// INDEX2COL computes the row given a cell index
function index2row(index) {
  return Math.floor(index / _constants.MaxCols);
}
