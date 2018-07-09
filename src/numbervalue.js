// Copyright 2015-2018 FormBucket LLC

import reduce from "./reduce";
import isempty from "./isempty";
import iserror from "./iserror";
import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import split from "./split";
import code from "./code";

// Convert a text value into a number value.
export default function numbervalue(
  text,
  decimal_separator = ".",
  group_separator = ","
) {
  // Return error when text is error
  if (iserror(text)) {
    return text;
  }

  // Return `#VALUE!` when text is empty
  if (isempty(text)) {
    return error.value;
  }

  // Return the value when it is already a number.
  if (isnumber(text)) {
    return text;
  }

  var foundDecimal = false,
    len = text.length - 1;

  if (text.length === 1) {
    if (code(text, 0) < 48 || code(text, 0) > 57) {
      return error.value;
    }
    return +text;
  }

  return reduce(split(text, ""), (acc, item, index) => {
    if (acc === error.value) {
      return error.value;
    } else if (len === index) {
      if (item === "%") {
        return +acc / 100;
      }
      return +acc.concat(item);
    } else if (item === decimal_separator) {
      if (foundDecimal) return error.value;
      foundDecimal = true;
      return acc.concat(".");
    } else if (item === group_separator) {
      return acc;
      // check if between 0 and 9 ascii codes
    } else if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) {
      return error.value;
    }

    return acc.concat(item);
  });
}
