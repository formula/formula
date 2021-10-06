// Copyright 2015-2021 JC Fisher

import isblank from "./isblank";
import { ERRORTYPES as error } from "./error";

// Find a needle in a table searching horizontally.
export default function hlookup(needle, table, index = 1, exactmatch = false) {
  if (typeof needle === "undefined" || isblank(needle)) {
    return null;
  }

  if (index > table.length) {
    return error.ref;
  }

  var needleLower = (needle + "").toLowerCase(),
    row = table[0];

  for (var i = 0; i < row.length; i++) {
    if (
      (exactmatch && row[i] === needle) ||
      (row[i] == needle ||
        (typeof row[i] === "string" &&
          row[i].toLowerCase().indexOf(needleLower) != -1))
    ) {
      return table[index - 1][i];
    }
  }

  return error.na;
}
