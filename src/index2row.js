// Copyright 2015 WebsiteHQ LLC

import {MaxCols} from './constants';

// INDEX2COL computes the row given a cell index
export default function index2row(index) {
  return Math.floor(index / MaxCols);
}
