// Copyright 2015 Peter W Moresi

import {FLATTEN} from './FLATTEN'

// XOR computes the exclusive or for a given set of `values`.
export function XOR(...values) {
    return !!(FLATTEN(values).reduce((a,b) => {
      if (b) {
        return a+1
      }
      return a
    }, 0) & 1)
}
