"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iserr;

var _error = require("./error");

var _isnan = _interopRequireDefault(require("./isnan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
function iserr(value) {
  return value && value !== _error.ERRORTYPES.na && value.constructor && value.constructor.name === "Error" || typeof value === "number" && ((0, _isnan.default)(value) || !isFinite(value));
}
