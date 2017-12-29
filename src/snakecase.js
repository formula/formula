// Copyright 2015 JC Fisher

import istext from './istext';
import error from './error';

// convert camelcase to snakecase.
export default function snakecase(value) {

  // Return `#VALUE!` if not text input.
  if (!istext(value)) {
    return error.value;
  }

  // credit: prototype.js
  return value.replace(/::/g, '/')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase();
}
