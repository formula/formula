// Copyright 2015 WebsiteHQ LLC

// FILTER limits a range based on arrays of boolean values.
export default function filter(range, ...filters) {

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makefilter() {
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

  return range.filter( makefilter() )

}
