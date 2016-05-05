// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK';
import error from './ERROR';

// HLOOKUP searches for a needle across the rows.
export function HLOOKUP(needle, table, index=1, exactmatch) {
    if (typeof needle === "undefined" || ISBLANK(needle)) {
        return null;
    }

    if (index > table.length) {
      return error.ref
    }

    var needleLower = (needle + '').toLowerCase(),
    row = table[0];

    for (var i = 0; i < row.length; i++){

      if ((exactmatch && row[i]===needle) ||
          ((row[i] == needle) ||
           (typeof row[i] === "string" && row[i].toLowerCase().indexOf(needleLower) != -1) )) {
            return table[index-1][i];
        }
    }

    return error.na;
}
