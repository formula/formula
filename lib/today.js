"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = today;

var _datevalue = _interopRequireDefault(require("./datevalue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function today() {
  var d = new Date();
  return (0, _datevalue.default)(d.toLocaleDateString());
}
