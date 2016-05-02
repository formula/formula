// Copyright 2015 Peter W Moresi

import {EQ} from './EQ'
// NE returns true when a is not equal to b.
export function NE(a,b) {
  return !EQ(a, b)
}
