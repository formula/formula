// Copyright 2015-2021 JC Fisher

import isblank from "./isblank";
import isfunction from "./isfunction";
import isnumber from "./isnumber";
import index2col from "./index2col";
import index2row from "./index2row";
import unique from "./unique";
import columnletter from "./columnletter";
import { ERRORTYPES as error } from "./error";

// REF accepts top and bottom and returns a reference object. It encapsulates a cell or a range.
export default function ref(top, bottom) {
  // The index must be a number
  if (!isnumber(top) && !isfunction(top)) {
    return error.value;
  }

  if (isblank(bottom)) {
    bottom = top;
  }

  var getTop = () => (isfunction(top) ? top() : top);
  var getBottom = () => (isfunction(bottom) ? bottom() : bottom);

  return {
    get _isref() {
      return true;
    },

    get top() {
      return getTop();
    },

    get bottom() {
      return getBottom();
    },

    // Returns row (rowIndex plus 1)
    get row() {
      return index2row(getTop()) + 1;
    },

    // Returns rowIndex (base 0)
    get rowIndex() {
      return index2row(getTop());
    },

    // Returns column letter
    get column() {
      return columnletter(index2col(getTop()));
    },

    // Returns column index
    get columnIndex() {
      return index2col(getTop());
    },

    // Returns row (rowIndex plus 1)
    get bottomRow() {
      return index2row(getBottom()) + 1;
    },

    // Returns rowIndex (base 0)
    get bottomRowIndex() {
      return index2row(getBottom());
    },

    // Returns column letter
    get bottomColumn() {
      return columnletter(index2col(getBottom()));
    },

    // Returns column index
    get bottomColumnIndex() {
      return index2col(getBottom());
    },

    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    hit(index) {
      // Return `#NA!` when index is negative.
      if (index < 0) return error.na;

      // Check if value is inside range from top to bottom, inclusive.
      return index >= getTop() && index <= getBottom();
    },

    get size() {
      return 1 + (getBottom() - getTop());
    },

    // Return array with every cell index
    get cells() {
      return Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map(
        (x, y) => y + getTop()
      );
    },

    // Return array with every row
    get rows() {
      return unique(
        Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map((x, y) =>
          index2row(y + getTop())
        )
      );
    }
  };
}
