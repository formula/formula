// Copyright 2015 Peter W Moresi

import error from './error';

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
export function iserr(value) {
  return (
    (
      value !== error.na &&
      value.constructor.name === 'Error'
    ) || (
      typeof value === 'number' && (
        Number.isNaN(value) || !Number.isFinite(value)
      )
    )
  );
}
