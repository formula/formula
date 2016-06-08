// Copyright 2015 Peter W Moresi

import error from './error';

// ISNA returns true when the value is `#NA!`
export function isna(value) {
  return value === error.na;
}
