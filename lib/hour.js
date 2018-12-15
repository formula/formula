"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hour;

var _trunc = _interopRequireDefault(require("./trunc"));

var _isdate = _interopRequireDefault(require("./isdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function hour(value) {
  if ((0, _isdate.default)(value)) {
    return value.getHours();
  } // remove numbers before decimal place and convert fraction to 24 hour scale.


  return (0, _trunc.default)((value - (0, _trunc.default)(value)) * 24);
}
