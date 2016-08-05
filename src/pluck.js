import {isarray} from './isarray'

// pluck a property from a list of objects
export function pluck(prop, list) {
  if (!isarray(list)) {
    return error.na
  }

  return list.map(d => d[prop])
}
