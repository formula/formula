// Copyright 2015 Peter W Moresi

import {ISERROR} from './ISERROR'
import error from './ERROR'

// REPLACE returns a new string after replacing with `new_text`.
export function REPLACE(text, position, length, new_text) {

  if (ISERROR(position) || ISERROR(length) ||
  typeof text !== 'string' || typeof new_text !== 'string') {
    return error.value;
  }
  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
}
