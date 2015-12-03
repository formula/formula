'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANGE = undefined;

var _CELLINDEX = require('./CELLINDEX');

var _INDEX2COL = require('./INDEX2COL');

var _INDEX2ROW = require('./INDEX2ROW');

/* A range represents a subset of a worksheet.
*
* The topLeft is the cell index for the top left (inclusive)
* cell or, alternatively, it may be a function used to
* resolve a cell index.
*
* The bottom right is also a cell index or a function.
*/
function RANGE(_topLeft, _bottomRight) {

  return Object.freeze({
    /* Determine if cellIndex is within range
    */
    hit: function hit(cellIndex) {
      // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
      return _topLeft <= cellIndex && cellIndex <= _bottomRight;
    },
    topLeft: function topLeft() {
      return _topLeft;
    },
    topRow: function topRow() {
      return (0, _INDEX2ROW.INDEX2ROW)(_topLeft);
    },
    topColumn: function topColumn() {
      return (0, _INDEX2COL.INDEX2COL)(_topLeft);
    },
    bottomRight: function bottomRight() {
      return _bottomRight;
    },
    bottomColumn: function bottomColumn() {
      return (0, _INDEX2COL.INDEX2COL)(_bottomRight);
    },
    bottomRow: function bottomRow() {
      return (0, _INDEX2ROW.INDEX2ROW)(_bottomRight);
    },
    size: function size() {
      return _topLeft - _bottomRight;
    },
    cells: function cells() {
      var start = typeof _topLeft === 'function' ? _topLeft() : _topLeft,
          end = typeof _bottomRight === 'function' ? _bottomRight() : _bottomRight,
          that = this;

      return Array.apply(start, Array(end + 1)).map(function (x, y) {
        return y;
      });
    },
    rows: function rows() {
      var self = this;
      return Array.apply(topRow(), Array(bottomRow() + 1)).map(function (x, row) {
        return Array.apply(self.topColumn(), Array(self.bottomColumn() + 1)).map(function (x, col) {
          return [(0, _CELLINDEX.CELLINDEX)(col, row)];
        });
      });
    }
  });
} /*
  * A range represents a fragment of a worksheet.
  * It is defined as two points in a flat worksheet array.
  *
  * Use address system to convert row/col to cell indexes.
  */

exports.RANGE = RANGE;