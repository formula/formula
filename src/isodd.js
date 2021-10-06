// Copyright 2015-2021 JC Fisher

// ISODD returns true when the value is odd.
export default function isodd(value) {
  return !!(Math.floor(Math.abs(value)) & 1);
}
