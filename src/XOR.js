import {FLATTEN} from './FLATTEN'

export function XOR(...values) {
    return (FLATTEN(values).reduce((a,b) => {
      if (b) {
        return a+1
      }
      return a
    }, 0) & 1)
}
