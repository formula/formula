// Copyright 2015 JC Fisher
import reduce from './reduce'
import { ERRORTYPES as error } from './error'
import isArray from './isarray'

// convert array into nested array.
// example: unflatten([1,2,3,4]) -> [[1,2], [3, 4]]
export default function unflatten(ref, len=2){

  // if the reference data is not an array then stop.
  if (!isArray(ref)) {
    return error.value;
  }


  // use a reduction algorithm to convert data.
  return reduce( ref, function(p, v, i) {

    // The first iteration and every nth iteration.
    if ( i === 0 || i % len === 0) {
      p = p.concat([[]])
    }

    // determine last index in collected value (e.g. p).
    var lastIndex = p.length-1;

    // add the value to the last available spot.
    p[lastIndex] = p[lastIndex].concat(v)


    // return the new collected value.
    return p;
  }, []);
}
