"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trunc;

// Copyright 2015-2018 FormBucket LLC
// remove decimal part of number
function trunc(val) {
  return val | 0;
}
