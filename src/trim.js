// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";

// TRIMS returns a string without whitespace at the beginning or end.
export default function trim(text) {
  if (typeof text !== "string") {
    return error.value;
  }
  return text.trim();
}
