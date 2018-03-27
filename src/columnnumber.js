// Copyright 2015 JC Fisher

import { ERRORTYPES as error } from './error'
import istext from './istext'

// Convert letter to number (e.g A -> 0)
export default function columnnumber(column) {

  if (!istext(column)) {
    return error.value
  }

  // see toColumn for rant on why this is sensible even though it is illogical.
  var s = 0, secondPass;

  if (column.length > 0) {

    s = column.charCodeAt(0) - 'A'.charCodeAt(0);

    for (var i = 1; i < column.length; i++) {
      // compensate for spreadsheet column naming
      s+=1
      s *= 26;
      s += column.charCodeAt(i) - 'A'.charCodeAt(0);
      secondPass = true;
    }

    return s;

  }

  return error.value;

}
