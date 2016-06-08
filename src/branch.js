// Copyright 2015 Peter W Moresi

// branch is the function equivalent to `if-then-else`
//
// syntax:
// branch( test, result_if_true, [test2, result_if_true,] false_result )
export function branch(...cases) {

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
