// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";

// FIND searches for text within a string
export default function find(find_text, within_text = "", position = 1) {
  // Find the position of the text
  position = within_text.indexOf(find_text, position - 1);

  // If found return the position as base 1.
  return position === -1 ? error.value : position + 1;
}
