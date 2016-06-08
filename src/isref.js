// Copyright 2015 Peter W Moresi

import {isblank} from './isblank'

// ISREF returns true when the value is a reference.
export function isref(value) {
  if (!value) return false
  return value.isRef === true
}
