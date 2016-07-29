// Copyright 2015 Peter W Moresi

import {eq} from './eq'
// NE returns true when a is not equal to b.
export function ne(a,b) {
  return !eq(a, b)
}
