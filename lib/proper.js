"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = proper;

var _error = require("./error");

var _isnan = _interopRequireDefault(require("./isnan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// PROPER converts text into proper case.
function proper(text) {
  if (text === undefined || text.length === 0) {
    return _error.ERRORTYPES.value;
  }

  if (text === true) {
    text = "TRUE";
  }

  if (text === false) {
    text = "FALSE";
  }

  if ((0, _isnan.default)(text) && typeof text === "number") {
    return _error.ERRORTYPES.value;
  }

  if (typeof text === "number") {
    text = "" + text;
  }

  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
