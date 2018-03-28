// Copyright 2015 JC Fisher

import isarray from './isarray'
import { ERRORTYPES as error } from './error'
import map from './map';

// pluck a property from a list of objects.
export default function pluck(prop, list) {

  // Ensure that the list is an array.
  if (!isarray(list)) {
    return error.na
  }

  // Map the list to the property.
  return map( list, d => d[prop] )
}
