// Copyright 2015 Peter W Moresi

import error from './ERROR'
import {ISTEXT} from './ISTEXT'
import {ISREF} from './ISREF'
import {COLUMNNUMBER} from './COLUMNNUMBER'

// COLUMN return the column number that corresponds to the reference.
export function COLUMN(value) {

  // Return `#VALUE!` when the value is not a reference.
  if (!ISREF(value)) {
    return error.value;
  }

  // Run the COLUMNNUMBER and convert to base 1.
  return COLUMNNUMBER(value.column) + 1;
}
