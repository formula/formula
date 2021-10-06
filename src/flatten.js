// Copyright 2015-2021 JC Fisher
import reduce from "./reduce";
import { ERRORTYPES as error } from "./error";
import isArray from "./isarray";

// FLATTEN converts a nested array into a flattened array.
export default function flatten(ref) {
  if (!isArray(ref)) {
    return error.value;
  }

  return reduce(
    ref,
    function(a, b) {
      return a.concat(b);
    },
    []
  );
}
