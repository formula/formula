// Copyright 2015 JC Fisher

import unique from './unique'

// CHANGED computes the list of keys that are different between two objects.
export default function changed(a, b) {

  // Compute the keys in object a and b.
  var keysA = Object.keys(a),
  keysB = Object.keys(b)

  // Find the unique set of properties comparing a to b and b to a.
  return unique(
    keysA
    .filter( n => a[n] !== b[n])
    .concat(
      keysB
      .filter( n => a[n] !== b[n])
    )
  )
}
