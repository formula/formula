// Copyright 2015 JC Fisher
import reduce from './reduce'

// UNIQUE reduces an `array` into an array without duplicate values.
export default function unique(array) {
  return reduce( array, function(p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, [])
}
