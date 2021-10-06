// Copyright 2015-2021 JC Fisher

import istext from "./istext";
import { ERRORTYPES as error } from "./error";

// LOWER converts `value` to lower case
export default function lower(value) {
  if (!istext(value)) return error.value;
  return value.toLowerCase();
}
