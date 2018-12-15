"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replace;

var _iserror = _interopRequireDefault(require("./iserror"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// REPLACE returns a new string after replacing with `new_text`.
function replace(text, position, length, new_text) {
  if ((0, _iserror.default)(position) || (0, _iserror.default)(length) || typeof text !== "string" || typeof new_text !== "string") {
    return _error.ERRORTYPES.value;
  }

  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
}
