import {ISBLANK} from './ISBLANK'
import {ISARRAY} from './ISARRAY'
import error from './ERROR'

// Find a needle in a lookup
export function IN(needle, lookup) {

  if ( ISBLANK(needle) && ISBLANK(lookup) ) {
    return error.na;
  }

  if (!ISARRAY(lookup)) {
    return error.na;
  }

  return lookup.some(n => n === needle)
}
