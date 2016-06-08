// Copyright 2015 Peter W Moresi

import {MaxCols} from './constants';

// INDEX2COL computes the row given a cell index
export function index2row(index) {
  return Math.floor(index / MaxCols);
}
