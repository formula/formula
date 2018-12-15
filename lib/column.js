"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = column;

var _error = require("./error");

var _istext = _interopRequireDefault(require("./istext"));

var _isref = _interopRequireDefault(require("./isref"));

var _columnnumber = _interopRequireDefault(require("./columnnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// COLUMN return the column number that corresponds to the reference.
function column(value) {
  // Return `#VALUE!` when the value is not a reference.
  if (!(0, _isref.default)(value)) {
    return _error.ERRORTYPES.value;
  } // Run the COLUMNNUMBER and convert to base 1.


  return (0, _columnnumber.default)(value.column) + 1;
}
