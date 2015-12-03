'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CELL = CELL;

var _INDEX2COL = require('./INDEX2COL');

var _INDEX2ROW = require('./INDEX2ROW');

/* Structure for CELL reference
*/
function CELL(index) {
  if (typeof index !== 'number') {
    throw 'Cell index must be a Number';
  }
  return Object.freeze({
    /* Cells also support topLeft
     */
    topLeft: function topLeft() {
      return index;
    },
    /* Returns rowIndex
    */
    getRow: function getRow() {
      return (0, _INDEX2ROW.INDEX2ROW)(index);
    },

    /* Return columnIndex
    */
    getColumn: function getColumn() {
      return (0, _INDEX2COL.INDEX2COL)(index);
    }
  });
}