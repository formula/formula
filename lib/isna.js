"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isna;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// ISNA returns true when the value is `#NA!`
function isna(value) {
  return value === _error.ERRORTYPES.na;
}
