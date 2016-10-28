// Copyright 2015 WebsiteHQ LLC

import isnumber from './isnumber';
import error from './error';

// TAN computes the tagent of a value.
export default function tan(value) {

  if (!isnumber(value)) {
    return error.value;
  }

  return Math.tan(value);

}
