// Copyright 2015 Peter W Moresi

import error from './error'

// AND reduces list of truthy values into true or false value
export function and(...criteria) {

  // Reduce criteria into boolean value.
  return criteria.reduce(
    (acc, item) => {

      // return `#VALUE!` if not true, false, 1 or 0
      if (item !== true && item !== false && item !== 1 && item !== 0) {
        return error.value
      }

      // Once `#VALUE!` is found then always return `#VALUE!`
      if (acc === error.value) return error.value

      // Once `false` is found always return `false`
      if (acc === false) return false

      // Return the current value whether true or false
      return item === true || item === 1;
    })
  }
