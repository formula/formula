"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mod;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MOD returns the remainder of a / b.
function mod(a, b) {
  if (!(0, _isnumber.default)(a) || !(0, _isnumber.default)(b)) return _error.ERRORTYPES.value;
  return a % b;
}
