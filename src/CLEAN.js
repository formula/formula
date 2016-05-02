// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'
import {SELECT} from './SELECT'

// CLEAN accepts an object and remove properties that are blank.
export function CLEAN(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter( n => !ISBLANK(obj[n]) )

  // Compute object with only non-blank keys.
  return SELECT( keys, obj )
}
