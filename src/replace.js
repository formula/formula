// Copyright 2015-2018 FormBucket LLC

import iserror from "./iserror";
import { ERRORTYPES as error } from "./error";

// REPLACE returns a new string after replacing with `new_text`.
export default function replace(text, position, length, new_text) {
  if (
    iserror(position) ||
    iserror(length) ||
    typeof text !== "string" ||
    typeof new_text !== "string"
  ) {
    return error.value;
  }
  return (
    text.substr(0, position - 1) + new_text + text.substr(position - 1 + length)
  );
}
