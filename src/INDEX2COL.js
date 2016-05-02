// Copyright 2015 Peter W Moresi

import {MaxCols} from './CONSTANTS';
import {INDEX2ROW} from './INDEX2ROW';

// INDEX2COL computes the column given a cell index
export function INDEX2COL(index) {
  return index - (INDEX2ROW(index) * MaxCols);
}
