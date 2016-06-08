// Copyright 2015 Peter W Moresi

import {isref} from './isref';
import {isarray} from './isarray';
import error from './error';

// SORT a reference or an array.
//
// The criteria may use 1 of several forms:
//
// sort(reference(reference: Array, ...criteria : List<string>)
// sort(reference(reference: Range, ...criteria : List<string>)
//
// The List<function> will be reduced into a single function.
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
export function sort(ref, ...criteria) {

  // reduce the criteria array into a function
  let makeComparer = () => {
    return function(a, b) {
      var result = 0;
      for (var i = 0; i < criteria.length; i+2) {
        let field = (typeof criteria[i] === 'string' ? criteria[i] : criteria[i] - 1),
            order = criteria[i+1];

        if (a[field] < b[field]) {
          return order ? -1 : 1;
        } else {
          return order ? 1 : -1;
        }

      }

      return result;

    }

  }

  if (isref(ref) || isarray(ref)) {
    return ref.sort( makeComparer() );
  }

  return error.na;

}
