// Copyright 2015 WebsiteHQ LLC

// ISARRAY returns true when the value is an aray.
export default function isarray(value) {
  return Object.prototype.toString.call( value ) === '[object Array]'
}
