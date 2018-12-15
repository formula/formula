"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = time;

var _constants = require("./constants");

// Copyright 2015-2018 FormBucket LLC
function time(hour, minute, second) {
  return +((hour * 3600 + minute * 60 + second) / _constants.SecondsInDay).toFixed(15);
}
