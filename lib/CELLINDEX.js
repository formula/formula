"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CELLINDEX = CELLINDEX;
/* Compute the position in a 2 dimensional array
 */
function CELLINDEX(row, col) {
  return Math.floor(row * 16384 + col);
}