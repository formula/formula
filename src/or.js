// Copyright 2015 Peter W Moresi

import {isfunction} from './isfunction'

// OR returns true when any of the criter is true or 1.
export function or(...criteria) {
  return criteria.reduce( (acc, item) => {
    if (acc === true) return true;
    let value = isfunction(item) ? item() : item;
    return value === true || value === 1;
  }, false)
}
