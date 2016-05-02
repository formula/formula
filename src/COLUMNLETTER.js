// Copyright 2015 Peter W Moresi

import error from './ERROR'
import {ISNUMBER} from './ISNUMBER'

// Convert index to letter (e.g 0 -> A)
export function COLUMNLETTER( index ) {

  if (!ISNUMBER(index)) {
    return error.value
  }

  // The column is determined by applying a modified Hexavigesimal algorithm.
  // Normally BA follows Z but spreadsheets count wrong and nobody cares.

  // Instead they do it in a way that makes sense to most people but
  // is mathmatically incorrect. So AA follows Z which in the base 10
  // system is like saying 01 follows 9.

  // In the least significant digit
  // A..Z is 0..25

  // For the second to nth significant digit
  // A..Z is 1..26

  var converted = ""
  ,secondPass = false
  ,remainder
  ,value = Math.abs(index);

  do {
    remainder = value % 26;

    if (secondPass) {
      remainder--;
    }

    converted = String.fromCharCode((remainder + 'A'.charCodeAt(0))) + converted;
    value = Math.floor((value - remainder) / 26);

    secondPass = true;
  } while (value > 0);

  return converted;

}
