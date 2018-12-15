"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = or;

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns true when any of the criteria are true or 1, defaults to false.
function or() {
  for (var _len = arguments.length, criteria = new Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return (0, _reduce.default)(criteria, function (acc, item) {
    // If accumulator is already true then it's still true.
    if (acc === true) return true; // Determine the value by resolving thunks if needed.

    var value = (0, _isfunction.default)(item) ? item() : item; // Return true when value is true or 1.

    return value === true || value === 1;
  }, false);
}
