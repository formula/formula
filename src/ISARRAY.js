// Copyright 2015 Peter W Moresi

// ISARRAY returns true when the value is an aray.
export function ISARRAY(value) {
  return Object.prototype.toString.call( value ) === '[object Array]'
}
