// Copyright 2015-2018 FormBucket LLC

import na from "./error";
import assign from "./assign";
import map from "./map";

// merge two array of arrays
export default function merge(setA, setB, fieldOrIndex) {
  if (setA.length !== setB.length) {
    return na;
  }

  let mode = typeof fieldOrIndex === "string" ? "field" : "index",
    startIndex = mode === "field" ? 1 : 0;

  return map(setA, (item, index) => {
    return assign({}, item, setB[index]);
  });
}
