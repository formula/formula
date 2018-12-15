"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timevalue;

var _constants = require("./constants");

// Copyright 2015-2018 FormBucket LLC
function timevalue(time_text) {
  // The JavaScript new Date() does not accept only time.
  // To workaround the issue we put 1/1/1900 at the front.
  var date = new Date("1/1/1900 " + time_text);

  if (date instanceof Error) {
    return date;
  }

  return (_constants.SecondsInHour * date.getHours() + _constants.SecondsInMinute * date.getMinutes() + date.getSeconds()) / _constants.SecondsInDay;
}
