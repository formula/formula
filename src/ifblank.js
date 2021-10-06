// Copyright 2015-2021 JC Fisher

import isblank from "./isblank";

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
export default function ifblank(value, value_if_blank) {
  return isblank(value) ? value_if_blank : value;
}
