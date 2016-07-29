// Copyright 2015 Peter W Moresi

// isobject returns true when `value` is an object or function.
export function isobject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
};
