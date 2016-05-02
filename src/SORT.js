// Copyright 2015 Peter W Moresi

import {ISREF} from './ISREF';
import error from './ERROR';

// SORT a reference or an array.
//
// The criteria may use 1 of several forms:
//
// SORT(reference(reference: Array, ...criteria : List<string>)
// SORT(reference(reference: Range, ...criteria : List<string>)
//
// The List<function> will be reduced into a single function.
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
export function SORT(ref, ...criteria) {

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

  if (ISREF(ref) || Array.isArray(ref)) {
    return ref.sort( makeComparer() );
  }

  return error.na;

}
