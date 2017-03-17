// Copyright 2015 JC Fisher

import isarray from './isarray'
import error from './error'

// pluck a property from a list of objects
export default function pluck(prop, list) {
  if (!isarray(list)) {
    return error.na
  }

  return list.map(d => d[prop])
}
