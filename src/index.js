// Copyright 2015 Peter W Moresi

import error from './error';
import isarray from './isarray';
import isblank from './isblank';

// index returns the value in a row and column from a 2d array
export default function index(reference, row_num, column_num=1) {
  var row;

  if (!isarray(reference) || isblank(row_num)) {
    return error.value
  }

  if (reference.length < row_num) {
    return error.ref
  }

  row = reference[row_num-1];

  if (!isarray(row)) {
    return error.value
  }

  if (row.length < column_num) {
    return error.ref
  }

  return row[column_num-1];
}
