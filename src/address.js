// Copyright 2015 Peter W Moresi

import columnletter from './columnletter'
import iserror from './iserror'

// ADDRESS converts a row and column into an address (e.g A1)
export default function address(row, col, absolute_relative_mode, use_a1_notation, sheet) {

  // convert column number into letter
  var colLetter = columnletter(col-1)

  switch(absolute_relative_mode) {
    // Mode 0 returns `{column}{LETTER}`
    case 0:
    return colLetter + (row).toString()
    // Mode 2 returns `{column}${LETTER}`
    case 2:
    return colLetter + "$" + (row).toString()
    // Mode 3 returns `${column}{LETTER}`
    case 3:
    return "$" + colLetter + (row).toString()
    // Default mode returns `${column}${LETTER}`
    default:
    return "$" + colLetter + "$" + (row).toString()
  }
}
