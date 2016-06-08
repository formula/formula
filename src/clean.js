// Copyright 2015 Peter W Moresi

import {isblank} from './isblank'
import {select} from './select'

// CLEAN accepts an object and remove properties that are blank.
export function clean(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter( n => !isblank(obj[n]) )

  // Compute object with only non-blank keys.
  return select( keys, obj )
}
