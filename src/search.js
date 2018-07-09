// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";

// SEARCH finds text using wildcards ?, *, ~?, and ~*.
export default function search(find_text, within_text, position) {
  if (!within_text) {
    return null;
  }
  position = typeof position === "undefined" ? 1 : position;

  // The SEARCH function translated the find_text into a regex.
  var find_exp = find_text
    .replace(/([^~])\?/g, "$1.") // convert ? into .
    .replace(/([^~])\*/g, "$1.*") // convert * into .*
    .replace(/([~])\?/g, "\\?") // convert ~? into \?
    .replace(/([~])\*/g, "\\*"); // convert ~* into \*

  position = new RegExp(find_exp, "i").exec(within_text);

  if (position) {
    return position.index + 1;
  }
  return error.value;
}
