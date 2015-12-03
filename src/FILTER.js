/* The filter an array or a range by a set of filters */

export function FILTER(range, ...filters) {

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makeFilter() {
    return function(value, index) {
      return filters.reduce( function( previousValue, currentValue ) {
        if (previousValue === false ) {
          return false;
        } else {
          return currentValue[index];
        }
      }, true);
    }
  }

  return range.filter( makeFilter() )

}
