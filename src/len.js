// Copyright 2015 Peter W Moresi

import error from './error'

// LEN returns the size of a string or array.
export function len(text) {
  if (arguments.length === 0) {
    return error.error;
  }

  if (typeof text === 'string') {
    return text.length;
  }

  if (text.length) {
    return text.length;
  }

  return error.value;
};
