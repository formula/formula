// Copyright 2015-2021 JC Fisher
import reduce from "./reduce";
import keys from "./keys";

// Creates a new object where all of the keys are surrounded by
// start and end delimiters.
export default function surroundKeys(obj, start = "-", end) {
  end = end || start;
  return reduce(
    keys(obj),
    (p, v) => {
      p[`${start}${v}${end}`] = obj[v];
      return p;
    },
    {}
  );
}
