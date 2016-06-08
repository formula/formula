// Copyright 2015 Peter W Moresi

import {istext} from './istext'
import error from './error'

// LOWER converts `value` to lower case
export function lower(value) {
  if (!istext(value)) return error.value
  return value.toLowerCase()
}
