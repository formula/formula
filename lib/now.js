"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = now;

var _datevalue = _interopRequireDefault(require("./datevalue"));

var _timevalue = _interopRequireDefault(require("./timevalue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function now() {
  var d = new Date();
  return (0, _datevalue.default)(d.toLocaleDateString()) + (0, _timevalue.default)(d.toLocaleTimeString());
}
