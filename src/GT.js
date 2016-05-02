// Copyright 2015 Peter W Moresi

import {ISARRAY} from './ISARRAY';
import {ISREF} from './ISREF';
import error from './ERROR';

export function GT(a,b) {
  if ( ISREF(a) && ISREF(b) ) {
    return error.na;
  } else if ( ISARRAY(a) && ISARRAY(b) ) {
    return error.na;
  } else if ( ISREF(a) || ISARRAY(a) ) {
    return a.map( (d) => d > b );
  } else if ( ISREF(b) || ISARRAY(b) ) {
    return b.map( (d) => d > a );
  } else {
    return a > b;
  }
}
