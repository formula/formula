"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifna;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
function ifna(value, value_if_na) {
  return value === _error.ERRORTYPES.na ? value_if_na : value;
}
