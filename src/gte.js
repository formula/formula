// Copyright 2015-2021 JC Fisher

import isarray from "./isarray";
import isref from "./isref";
import map from "./map";

export default function gte(a, b) {
  if (isref(a) && isref(b)) {
    return error.na;
  } else if (isarray(a) && isarray(b)) {
    return error.na;
  } else if (isref(a) || isarray(a)) {
    return map(a, d => d >= b);
  } else if (isref(b) || isarray(b)) {
    return map(a, d => d >= a);
  } else {
    return a >= b;
  }
}
