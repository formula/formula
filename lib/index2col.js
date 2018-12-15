"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index2col;

var _constants = require("./constants");

var _index2row = _interopRequireDefault(require("./index2row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// INDEX2COL computes the column given a cell index
function index2col(index) {
  return index - (0, _index2row.default)(index) * _constants.MaxCols;
}
