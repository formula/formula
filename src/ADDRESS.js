// Copyright 2015 Peter W Moresi

import {COLUMNLETTER} from './COLUMNLETTER'
import {ISERROR} from './ISERROR'

// ADDRESS converts a row and column into an address (e.g A1)
export function ADDRESS(row, col, absolute_relative_mode, use_a1_notation, sheet) {

  // convert column number into letter
  var colLetter = COLUMNLETTER(col-1)

  switch(absolute_relative_mode) {
    // Mode 0 returns `{COLUMN}{LETTER}`
    case 0:
    return colLetter + (row).toString()
    // Mode 2 returns `{COLUMN}${LETTER}`
    case 2:
    return colLetter + "$" + (row).toString()
    // Mode 3 returns `${COLUMN}{LETTER}`
    case 3:
    return "$" + colLetter + (row).toString()
    // Default mode returns `${COLUMN}${LETTER}`
    default:
    return "$" + colLetter + "$" + (row).toString()
  }
}
