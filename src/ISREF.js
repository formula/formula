// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'

// ISREF returns true when the value is a reference.
export function ISREF(value) {
  if (!value) return false
  return value.isRef === true
}
