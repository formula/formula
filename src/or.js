// Copyright 2015 Peter W Moresi

// OR returns true when any of the criter is true or 1.
export function or(...criteria) {
  return criteria.reduce( (acc, item) => {
    if (acc === true) return true;
    return item === true || item === 1;
  }, false)
}
