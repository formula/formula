"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = join;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// combine a array of strings/numbers into a single string
function join(list) {
  var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ", ";

  // all values must be string or number
  if (list.some(function (d) {
    return typeof d !== "string" && typeof d !== "number";
  })) {
    return _error.ERRORTYPES.value;
  } // defer to JS implementation


  return list.join(delim);
}
