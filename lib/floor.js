"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = floor;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
function floor(value, significance) {
  significance = significance || 1;

  if (value > 0 && significance < 0) {
    return _error.ERRORTYPES.num;
  }

  if (value >= 0) {
    return Math.floor(value / significance) * significance;
  } else {
    return Math.ceil(value / significance) * significance;
  }
}
