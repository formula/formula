// Copyright 2015 JC Fisher

import isarray from './isarray';
import error from './error';

// SORT an array of objects.
//
// sort(reference(reference: Array, ...criteria : List<string>)
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
export default function sort(ref, ...criteria) {

  // reduce the criteria array into a function
  let makeComparer = () => {
    return function(a, b) {
      var result = 0;
      for (var i = 0; i < criteria.length; i=i+2) {
        if (result !== 0) continue;

        var field = (typeof criteria[i] === 'string' ? criteria[i] : criteria[i] - 1),
            order = criteria[i+1];        

        if (a[field] < b[field]) {
          result = order ? -1 : 1;
        }
        
        if (a[field] > b[field]) {
          result = order ? 1 : -1;
        }

      }

      return result;

    }

  }

  if (!isarray(ref)) {
    return error.na; 
  }

  return ref.sort( makeComparer() );

}
