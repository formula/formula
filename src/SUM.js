// Copyright 2015 Peter W Moresi

import {FLATTEN} from './FLATTEN'
import error from './ERROR'

// SUM a given list of `numbers`
export function SUM(...numbers) {
    return FLATTEN(FLATTEN(numbers))
    .reduce((a, b) => {
      if (typeof b !== 'number') { return error.value }
      return a + b
    });
}
