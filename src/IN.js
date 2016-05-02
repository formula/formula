// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'
import {ISARRAY} from './ISARRAY'
import {EQ} from './EQ'
import error from './ERROR'

// INT returns true when a needle is found in a lookup.
export function IN(needle, lookup) {

  // Return `#NA!` when the needle and lookup are blank.
  if ( ISBLANK(needle) && ISBLANK(lookup) ) {
    return error.na;
  }

  // Return `#NA!` when the lookup is not an array.
  if (!ISARRAY(lookup)) {
    return error.na;
  }

  // Return true when some of the values match the needle.
  return lookup.some(n => EQ(n, needle) )
}

// ALIAS CONTAINS
export const CONTAINS = IN
