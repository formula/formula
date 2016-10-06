// Copyright 2015 Peter W Moresi

// CONVERT a number to a fixed precision.
export default function round(number, precision) {
  return +number.toFixed(precision);
}
