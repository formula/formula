// Copyright 2015 JC Fisher

import istext from './istext'
import error from './error'

// LOWER converts `value` to lower case
export default function lower(value) {
  if (!istext(value)) return error.value
  return value.toLowerCase()
}
