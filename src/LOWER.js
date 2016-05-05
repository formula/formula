// Copyright 2015 Peter W Moresi

import {ISTEXT} from './ISTEXT'
import error from './ERROR'

// LOWER converts `value` to lower case
export function LOWER(value) {
  if (!ISTEXT(value)) return error.value
  return value.toLowerCase()
}
