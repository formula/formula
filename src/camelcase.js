// Copyright 2015-2021 JC Fisher

import istext from "./istext";
import { ERRORTYPES as error } from "./error";

// convert snakecase to camelcase.
export default function camelcase(value) {
  // Return `#VALUE!` if not text input.
  if (!istext(value)) {
    return error.value;
  }

  // converts -c into C and _c in C for every matched character.
  return value
    .replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : "";
    })
    .replace(/_+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : "";
    });
}
