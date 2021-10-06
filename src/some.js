// Copyright 2015-2021 JC Fisher

import isblank from "./isblank";
import isarray from "./isarray";
import eq from "./eq";
import { ERRORTYPES as error } from "./error";

// some returns true when a needle is found in a list.
export default function some(needle, list) {
  // Return `#NA!` when the needle and list are blank.
  if (isblank(needle) && isblank(list)) {
    return error.na;
  }

  // Return `#NA!` when the list is not an array.
  if (!isarray(list)) {
    return error.na;
  }

  // Return true when some of the values match the needle.
  return list.some(n => eq(n, needle));
}
