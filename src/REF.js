// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'
import {ISFUNCTION} from './ISFUNCTION'
import {ISNUMBER} from './ISNUMBER'
import {INDEX2COL} from './INDEX2COL'
import {INDEX2ROW} from './INDEX2ROW'
import {UNIQUE} from './UNIQUE'
import {COLUMNLETTER} from './COLUMNLETTER'
import error from './ERROR'

// REF accepts top and bottom and returns a reference object. It encapsulates a cell or a range.
export function REF(top, bottom) {

  // The index must be a number
  if (!ISNUMBER(top) && !ISFUNCTION(top)) {
    return error.value
  }

  if (ISBLANK(bottom)) {
    bottom = top
  }

  var getTop = () => ISFUNCTION(top) ? top() : top
  var getBottom = () => ISFUNCTION(bottom) ? bottom() : bottom

  // References are frozen and immutable
  return Object.freeze({

    get isRef(){
      return true
    },

    get top() {
      return getTop()
    },

    get bottom() {
      return getBottom()
    },

    // Returns row (rowIndex plus 1)
    get row() {
      return INDEX2ROW( getTop() ) + 1;
    },

    // Returns rowIndex (base 0)
    get rowIndex() {
      return INDEX2ROW( getTop() )
    },

    // Returns column letter
    get column() {
      return COLUMNLETTER( INDEX2COL( getTop() ) )
    },

    // Returns column index
    get columnIndex() {
      return INDEX2COL( getTop() )
    },

    // Returns row (rowIndex plus 1)
    get bottomRow() {
      return INDEX2ROW( getBottom() ) + 1;
    },

    // Returns rowIndex (base 0)
    get bottomRowIndex() {
      return INDEX2ROW( getBottom() )
    },

    // Returns column letter
    get bottomColumn() {
      return COLUMNLETTER( INDEX2COL( getBottom() ) )
    },

    // Returns column index
    get bottomColumnIndex() {
      return INDEX2COL( getBottom() )
    },

    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    hit(index) {

      // Return `#NA!` when index is negative.
      if (index < 0) return error.na

      // Check if value is inside range from top to bottom, inclusive.
      return (
        ( index >= getTop() ) &&
        ( index <= getBottom() )
      );
    },

    get size() {
      return 1 + (getBottom() - getTop())
    },

    // Return array with every cell index
    get cells() {
      return Array.apply(
        getTop(),
        Array( 1 + (getBottom() - getTop()) )
      )
      .map( (x, y) => y + getTop())
    },

    // Return array with every row
    get rows() {
      return UNIQUE(
        Array.apply(
          getTop(),
          Array( 1 + (getBottom() - getTop()) )
        )
        .map( (x, y) => INDEX2ROW(y + getTop()))
      )
    }

  });
}
