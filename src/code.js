// Copyright 2015 JC Fisher

import { ERRORTYPES as error } from './error'
// CODE accepts text and optionally index (default 1) returning the character code.
export default function code(text='', index=1) {
  if (index < 1) return error.na
  if (text.length < index) return error.value
  return text.charCodeAt(index-1);
}
