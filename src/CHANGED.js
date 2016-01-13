import {UNIQUE} from './UNIQUE'

export function CHANGED(a, b) {
  let keysA = Object.keys(a),
  keysB = Object.keys(b),
  InA = keysB.filter(n => keysA.indexOf(n) > -1),
  DiffA = InA.filter( n => a[n] !== b[n])

  return DiffA
}
