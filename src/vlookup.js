// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";
import isblank from "./isblank";
import iserror from "./iserror";

// VLOOKUP find a needle in a table searching vertically.
export default function vlookup(
  needle,
  table = [],
  index = 1,
  exactmatch = false
) {
  if (iserror(needle) || isblank(needle)) {
    return needle;
  }

  for (var i = 0; i < table.length; i++) {
    var row = table[i];

    if (index > row.length) {
      return error.ref;
    }

    if (
      (exactmatch && row[0] === needle) ||
      (row[0] == needle ||
        (typeof row[0] === "string" &&
          row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1))
    ) {
      return index < row.length + 1 ? row[index - 1] : row[0];
    }
  }

  return error.na;
}
