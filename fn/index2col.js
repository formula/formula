'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index2col;

var _constants = require('./constants');

var _index2row = require('./index2row');

var _index2row2 = _interopRequireDefault(_index2row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// INDEX2COL computes the column given a cell index
// Copyright 2015 JC Fisher

function index2col(index) {
  return index - (0, _index2row2.default)(index) * _constants.MaxCols;
}
module.exports = exports['default'];