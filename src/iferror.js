// Copyright 2015-2021 JC Fisher

import iserror from "./iserror";

// IFBLANK return the `value` if error, otherwise it returns `value_if_error`.
export default function iferror(value, value_if_error = null) {
  return iserror(value) ? value_if_error : value;
}
