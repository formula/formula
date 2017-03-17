// Copyright 2015 JC Fisher

import isfunction from './isfunction'

// OR returns true when any of the criter is true or 1.
export default function or(...criteria) {
  return criteria.reduce( (acc, item) => {
    if (acc === true) return true;
    let value = isfunction(item) ? item() : item;
    return value === true || value === 1;
  }, false)
}
