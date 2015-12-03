// COND.js -
// SYNTAX( condition1, result_if_true [, condition2, result_if_true] )

export function COND(...cases) {
  return cases.reduce( function(a, b, i) {

    // last case
    if (i === cases.length - 1 ) {
      if (typeof a !== 'undefined') {
        return cases[a];
      }

      return b;
    }

    // condition case
    if (typeof a === 'undefined' &&
        i % 2 === 0 && b) {
          return i+1;
        }

    return a;

  }, undefined)

}
