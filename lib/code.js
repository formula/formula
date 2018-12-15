"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = code;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// CODE accepts text and optionally index (default 1) returning the character code.
function code() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (index < 1) return _error.ERRORTYPES.na;
  if (text.length < index) return _error.ERRORTYPES.value;
  return text.charCodeAt(index - 1);
}
