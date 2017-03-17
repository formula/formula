// Copyright 2015 JC Fisher

import eq from './eq'
// NE returns true when a is not equal to b.
export default function ne(a,b) {
  return !eq(a, b)
}
