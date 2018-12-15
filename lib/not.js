"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = not;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// NOT negates a `value`
function not(value) {
  return value !== true && value !== false && value !== 1 && value !== 0 ? _error.ERRORTYPES.value : !value;
}
