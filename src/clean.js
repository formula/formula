// Copyright 2015-2021 JC Fisher

import isblank from "./isblank";
import select from "./select";
import oKeys from "./keys";

// CLEAN accepts an object and remove properties that are blank.
export default function clean(obj) {
  // Compute keys where value is non blank.
  let keys = oKeys(obj).filter(n => !isblank(obj[n]));

  // Compute object with only non-blank keys.
  return select(keys, obj);
}
