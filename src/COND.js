// COND.js -
// SYNTAX( condition1, result_if_true [, condition2, result_if_true] )

export function COND(...cases) {
  return cases.reduce( function(a, b, i) {

    if (typeof a !== 'undefined') {
      // return the previously found item
      return a;
    } else if (i === cases.length - 1 ) {
      // return the last item
      return b;
    } else if (i % 2 === 0 && b) {
      // return the found item
      return cases[i+1];
    }

  }, undefined)

}
