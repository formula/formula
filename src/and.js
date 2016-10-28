// Copyright 2015 WebsiteHQ LLC

import iserror from './iserror'
import error from './error'
import isfunction from './isfunction'

// AND reduces list of truthy values into true or false value
export default function and(...criteria) {

  // Reduce criteria into boolean value.
  return criteria.reduce(

    (acc, item) => {

      // Once `false` or #error! is found always return previously value
      if (acc === false || iserror(acc)) return acc

      // find the value if a literal or deferred value
      let val = isfunction(item) ? item() : item

      // return `#VALUE!` if not true, false, 1 or 0
      if (val !== true && val !== false && val !== 1 && val !== 0) {
        return error.value
      }

      // Return true when value is true or 1
      return val === true || val === 1;
    })
}
