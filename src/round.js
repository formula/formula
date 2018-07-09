// Copyright 2015-2018 FormBucket LLC

// CONVERT a number to a fixed precision.
export default function round(number, precision) {
  return +number.toFixed(precision);
}
