// Copyright 2015 Peter W Moresi

import {ref} from './ref';

// Returns a cell indirection
export function indirect(ref) {
  return ref(ref);
}
