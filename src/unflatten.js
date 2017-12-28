// Copyright 2015 JC Fisher
import reduce from './reduce'
import error from './error'
import isArray from './isarray'
// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
export default function unflatten(ref, len=2){

  if (!isArray(ref)) {
    return error.value;
  }

  return reduce( ref, function(p, v, i) {

    if ( i === 0 || i % len === 0) {
      p = p.concat([[]])
    }

    var lastIndex = p.length-1;

    p[lastIndex] = p[lastIndex].concat(v)

    return p;
  }, []);
}
