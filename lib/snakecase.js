"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = snakecase;

var _istext = _interopRequireDefault(require("./istext"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// convert camelcase to snakecase.
function snakecase(value) {
  // Return `#VALUE!` if not text input.
  if (!(0, _istext.default)(value)) {
    return _error.ERRORTYPES.value;
  } // credit: prototype.js


  return value.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/-/g, "_").toLowerCase();
}
