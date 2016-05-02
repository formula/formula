// Copyright 2015 Peter W Moresi

import error from './ERROR';

// FIND searches for text within a string
export function FIND(find_text, within_text='', position=1) {

  // Find the position of the text
  position = within_text.indexOf(find_text, position - 1)

  // If found return the position as base 1.
  return position === -1 ? error.value : position+1
}
