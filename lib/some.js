"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = some;

var _isblank = _interopRequireDefault(require("./isblank"));

var _isarray = _interopRequireDefault(require("./isarray"));

var _eq = _interopRequireDefault(require("./eq"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// some returns true when a needle is found in a list.
function some(needle, list) {
  // Return `#NA!` when the needle and list are blank.
  if ((0, _isblank.default)(needle) && (0, _isblank.default)(list)) {
    return _error.ERRORTYPES.na;
  } // Return `#NA!` when the list is not an array.


  if (!(0, _isarray.default)(list)) {
    return _error.ERRORTYPES.na;
  } // Return true when some of the values match the needle.


  return list.some(function (n) {
    return (0, _eq.default)(n, needle);
  });
}
