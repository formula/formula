// Copyright 2015 JC Fisher

// ISARRAY returns true when the value is an aray.
export default function isarray(value) {
  return Object.prototype.toString.call( value ) === '[object Array]'
}
