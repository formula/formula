// Author: Peter Moresi
import {FLATTEN} from './FLATTEN'
import error from './ERROR'

export function SUM(...numbers) {
    return FLATTEN(FLATTEN(numbers))
    .reduce((a, b) => {
      if (typeof b !== 'number') { return error.value }
      return a + b
    });
}
