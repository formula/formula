"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parsebool;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// PARSEBOOL converts a truthy value into a boolean value.
function parsebool(val) {
  if (val instanceof Error) {
    return val;
  } else if (typeof val === "boolean") {
    return val;
  } else if (typeof val === "number") {
    return val !== 0;
  } else if (typeof val === "string") {
    var up = val.toUpperCase();

    if (up === "TRUE" || up === "FALSE") {
      return up === "TRUE";
    }
  }

  return _error.ERRORTYPES.value;
}
