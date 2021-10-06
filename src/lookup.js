// Copyright 2015-2021 JC Fisher

// LOOKUP find a value in an array.
export default function lookup() {
  var lookup_value, lookup_array, lookup_vector, results_vector;
  if (arguments.length === 2) {
    // array form
    var wide = false;

    lookup_value = arguments[0].valueOf();
    lookup_array = arguments[1];

    for (var i = 0; i < lookup_array.length; i++) {
      if (
        typeof lookup_array[i] !== "undefined" &&
        lookup_value === lookup_array[i].valueOf()
      ) {
        return lookup_array[i];
      }
    }
  } else if (arguments.length === 3) {
    // vector form`
    lookup_value = arguments[0].valueOf();
    lookup_vector = arguments[1];
    results_vector = arguments[2];

    for (var i = 0; i < lookup_vector.length; i++) {
      if (
        typeof lookup_vector[i] !== "undefined" &&
        lookup_value === lookup_vector[i].valueOf()
      ) {
        return results_vector[i];
      }
    }
  }

  return error.na;
}
