import {ISARRAY} from './ISARRAY'

// Find a needle in a lookup
export function IN(needle, lookup) {

  if (arguments.length !== 2) {
    return error.na;
  }

  if (!lookupValue && !lookupArray) {
    return error.na;
  }

  if (!ISARRAY(lookup)) {
    return error.na;
  }

  lookup.some(n => n === needle)
}
