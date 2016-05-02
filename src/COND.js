// Copyright 2015 Peter W Moresi

// COND accepts conditions and returns the even value after the first odd
// value that is true. If no odd value is true then it returns the last odd
// value when present.
//
// SYNTAX( cond1, result_if_true [, cond2, result_if_true, default_result] )
export function COND(...cases) {

  var found = false

  // Reduce all cases into a value.
  return cases.reduce( function(acc, item, index) {

    // Return previously found result
    if (found === true) return acc

    // Handle last item
    if ( index === cases.length - 1 ) {
      // There is no last item.
      if (index % 2 === 1) return;

      // return the last item
      return item;
    }

    // Check if condition is true
    if (index % 2 === 0 && item === true) {
      found = true
      // return the found item
      return cases[index+1];
    }

    return acc;

  }, undefined)

}
