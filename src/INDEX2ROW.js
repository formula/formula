// Copyright 2015 Peter W Moresi

import {MaxCols} from './CONSTANTS';

// INDEX2COL computes the row given a cell index
export function INDEX2ROW(index) {
  return Math.floor(index / MaxCols);
}
