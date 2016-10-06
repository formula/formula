// Copyright 2015 Peter W Moresi

import isarray from './isarray';
import isref from './isref';
import error from './error';

export default function gt(a,b) {
  if ( isref(a) && isref(b) ) {
    return error.na;
  } else if ( isarray(a) && isarray(b) ) {
    return error.na;
  } else if ( isref(a) || isarray(a) ) {
    return a.map( (d) => d > b );
  } else if ( isref(b) || isarray(b) ) {
    return b.map( (d) => d > a );
  } else {
    return a > b;
  }
}
