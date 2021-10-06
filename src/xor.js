// Copyright 2015-2021 JC Fisher
import reduce from "./reduce";
import flatten from "./flatten";

// XOR computes the exclusive or for a given set of `values`.
export default function xor(...values) {
  return !!(
    reduce(
      flatten(values),
      (a, b) => {
        if (b) {
          return a + 1;
        }
        return a;
      },
      0
    ) & 1
  );
}
