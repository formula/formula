// Copyright 2015-2018 FormBucket LLC
import { ERRORTYPES as error } from "./error";
import branch from "./branch";
import reduce from "./reduce";
import isarray from "./isarray";
import isfunction from "./isfunction";
import istext from "./istext";
import run from "./run";

// FILTER limits a range based on arrays of boolean values.
export default function filter(range, ...filters) {
  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makefilter() {
    return function(value, index) {
      return reduce(
        filters,
        function(previousValue, currentValue) {
          if (previousValue === false) {
            return false;
          } else {
            return branch(
              isarray(currentValue),
              () => currentValue[index],
              isfunction(currentValue),
              () => currentValue(value, index),
              istext(currentValue),
              () => run(currentValue, value),
              error.na
            );
          }
        },
        true
      );
    };
  }

  return range.filter(makefilter());
}
