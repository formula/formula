// Copyright 2015 JC Fisher
import reduce from './reduce'
import error from './error'
import isArray from './isarray'
// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
export default function flatten(ref){

  if (!isArray(ref)) {
    return error.value;
  }

  return reduce( ref, function(a, b) {
    return a.concat(b);
  }, []);
}
