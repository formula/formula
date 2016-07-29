// Copyright 2015 Peter W Moresi

import {flatten} from './flatten'
import error from './error'

// SUM a given list of `numbers`
export function sum(...numbers) {
    return flatten(flatten(numbers))
    .reduce((a, b) => {
      if (typeof b !== 'number') { return error.value }
      return a + b
    });
}
