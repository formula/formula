// Copyright 2015 JC Fisher

import {MaxCols} from './constants'

// CELLINDEX computes the index for row and column in a 2 dimensional array.
export default function cellindex(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor( (row * MaxCols) + col );
}
