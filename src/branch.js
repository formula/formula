// Copyright 2015 JC Fisher

import isfunction from './isfunction'
import istruthy from './istruthy'
import reduce from './reduce'
// This function provides if-elseif-else.
// branch( test, result_if_true, [test2, result_if_true, default_result] ).
export default function branch(...cases) {

  var resolved = false

  // Reduce all cases into a value.
  return reduce( cases, function(acc, item, index) {
    let val;

    // Return previously resolved result.
    if (resolved === true) return acc

    // Handle default case.
    if ( index === cases.length - 1 ) {
      // There is no last item.
      if (index % 2 === 1) return;

      // return the last item.
      return isfunction(item) ? item() : item;
    }

    // Check if condition is true.
    if (index % 2 === 0 && (
        (isfunction(item) && istruthy(item()) ) ||
        (!isfunction(item) && istruthy(item)))) {
      resolved = true
      val = cases[index+1]
      return isfunction(val) ? val() : val;
    }

    return acc;

  }, undefined)

}
