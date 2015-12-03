import {ISARRAY} from './ISARRAY';
import {ISRANGE} from './ISRANGE';
import error from './ERROR';

export function GT(a,b) {
  if ( ISRANGE(a) && ISRANGE(b) ) {
    return error.na;
  } else if ( ISARRAY(a) && ISARRAY(b) ) {
    return error.na;
  } else if ( ISRANGE(a) || ISARRAY(a) ) {
    return a.map( (d) => d > b );
  } else if ( ISRANGE(b) || ISARRAY(b) ) {
    return b.map( (d) => d > a );
  } else {
    return a > b;
  }
}
