// Copyright 2015-2018 FormBucket LLC

import isarray from "./isarray";
import isref from "./isref";
import { ERRORTYPES as error } from "./error";
import map from "./map";

export default function gt(a, b) {
  if (isref(a) && isref(b)) {
    return error.na;
  } else if (isarray(a) && isarray(b)) {
    return error.na;
  } else if (isref(a) || isarray(a)) {
    return map(a, d => d > b);
  } else if (isref(b) || isarray(b)) {
    return map(a, d => d > a);
  } else {
    return a > b;
  }
}
