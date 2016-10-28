// Copyright 2015 WebsiteHQ LLC

// isobject returns true when `value` is an object or function.
export default function isobject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
};
