"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isnan;

// Copyright 2015-2018 FormBucket LLC
// ISNA returns true when the value is `#NA!`
function isnan(value) {
  if (Number.isNaN) return Number.isNaN(value);
  return typeof value === "number" && isNaN(value);
}
