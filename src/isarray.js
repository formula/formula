// Copyright 2015 Peter W Moresi

// ISARRAY returns true when the value is an aray.
export default function isarray(value) {
  return Object.prototype.toString.call( value ) === '[object Array]'
}
