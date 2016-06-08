// Copyright 2015 Peter W Moresi

import error from './error'
import {istext} from './istext'
import {isref} from './isref'
import {columnnumber} from './columnnumber'

// COLUMN return the column number that corresponds to the reference.
export function column(value) {

  // Return `#VALUE!` when the value is not a reference.
  if (!isref(value)) {
    return error.value;
  }

  // Run the COLUMNNUMBER and convert to base 1.
  return columnnumber(value.column) + 1;
}
