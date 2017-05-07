// Copyright 2015 JC Fisher

import isfunction from './isfunction'
import reduce from './reduce'
// OR returns true when any of the criter is true or 1.
export default function or(...criteria) {
  return reduce( criteria, (acc, item) => {
    if (acc === true) return true;
    let value = isfunction(item) ? item() : item;
    return value === true || value === 1;
  }, false)
}
