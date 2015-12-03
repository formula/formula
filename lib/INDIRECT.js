'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDIRECT = INDIRECT;

var _CELL = require('./CELL');

function INDIRECT(ref) {
  console.log(this);
  return new _CELL.CELL(this, ref.index);
} /* Returns a cell indirection
   */