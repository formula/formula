"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bin2dec;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// BIN2DEC converts binary string into decimal value
function bin2dec(value) {
  var valueAsString;

  if (typeof value === "string") {
    valueAsString = value;
  } else if (typeof value !== "undefined") {
    valueAsString = value.toString();
  } else {
    return _error.ERRORTYPES.NA;
  }

  if (valueAsString.length > 10) return _error.ERRORTYPES.NUM; // we subtract 512 when the leading number is 0.

  if (valueAsString.length === 10 && valueAsString[0] === "1") {
    return parseInt(valueAsString.substring(1), 2) - 512;
  } // Convert binary number to decimal with built-in facility


  return parseInt(valueAsString, 2);
}
