/*
* A range represents a fragment of a worksheet.
* It is defined as two points in a flat worksheet array.
*
* Use address system to convert row/col to cell indexes.
*/

import {CELLINDEX} from './CELLINDEX';
import {INDEX2COL} from './INDEX2COL';
import {INDEX2ROW} from './INDEX2ROW';

/* A range represents a subset of a worksheet.
*
* The topLeft is the cell index for the top left (inclusive)
* cell or, alternatively, it may be a function used to
* resolve a cell index.
*
* The bottom right is also a cell index or a function.
*/
export function RANGE(topLeft, bottomRight) {

  return Object.freeze({
    /* Determine if cellIndex is within range
    */
    hit: function(cellIndex) {
      // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
      return ((topLeft <= cellIndex) &&
      (cellIndex <= bottomRight));
    },
    topLeft: function() {
      return topLeft;
    },
    topRow: function() {
      return INDEX2ROW(topLeft);
    },
    topColumn: function() {
      return INDEX2COL(topLeft);
    },
    bottomRight: function() {
      return bottomRight;
    },
    bottomColumn: function() {
      return INDEX2COL(bottomRight);
    },
    bottomRow: function() {
      return INDEX2ROW(bottomRight);
    },
    size: function() {
      return topLeft - bottomRight;
    },
    cells: function() {
      var start = typeof topLeft === 'function' ? topLeft() : topLeft,
      end = typeof bottomRight === 'function' ? bottomRight() : bottomRight,
      that = this;

      return Array.apply(start, Array(end+1)).map(function (x, y) {
        return y;
      });
    },
    rows: function() {
      var self = this;
      return Array.apply(topRow(), Array(bottomRow()+1)).map(function (x, row) {
        return Array.apply(self.topColumn(), Array(self.bottomColumn()+1)).map(function (x, col) {
          return [CELLINDEX(col, row)];
        })
      })
    }
  });
}
