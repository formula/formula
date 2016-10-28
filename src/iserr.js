// Copyright 2015 WebsiteHQ LLC

import error from './error';

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
export default function iserr(value) {
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
