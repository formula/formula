// Copyright 2015-2018 FormBucket LLC

import { MaxCols } from "./constants";

// Computes the index for row and column in a 2 dimensional array.
export default function cellindex(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor(row * MaxCols + col);
}
