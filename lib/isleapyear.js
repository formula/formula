"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isleapyear;

var _parsedate = _interopRequireDefault(require("./parsedate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function isleapyear(val) {
  var date = (0, _parsedate.default)(val);
  var year = date.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
