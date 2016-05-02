// Copyright 2015 Peter W Moresi

import error from './ERROR';

// ISNA returns true when the value is `#NA!`
export function ISNA(value) {
  return value === error.na;
}
