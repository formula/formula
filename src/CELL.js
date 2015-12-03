import {INDEX2COL} from './INDEX2COL';
import {INDEX2ROW} from './INDEX2ROW';

/* Structure for CELL reference
*/
export function CELL(index) {
  if (typeof index !== 'number') {
    throw 'Cell index must be a Number';
  }
  return Object.freeze({
    /* Cells also support topLeft
     */
    topLeft: function() {
      return index
    },
    /* Returns rowIndex
    */
    getRow: function() {
      return INDEX2ROW(index);
    },

    /* Return columnIndex
    */
    getColumn: function() {
      return INDEX2COL(index);
    }
  });
}
