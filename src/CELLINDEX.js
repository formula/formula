// Copyright 2015 Peter W Moresi

import {MaxCols} from './CONSTANTS'

// CELLINDEX computes the index for row and column in a 2 dimensional array.
export function CELLINDEX(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor( (row * MaxCols) + col );
}
