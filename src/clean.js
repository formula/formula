// Copyright 2015 WebsiteHQ LLC

import isblank from './isblank'
import select from './select'

// CLEAN accepts an object and remove properties that are blank.
export default function clean(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter( n => !isblank(obj[n]) )

  // Compute object with only non-blank keys.
  return select( keys, obj )
}
