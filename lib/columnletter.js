"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = columnletter;

var _error = require("./error");

var _isnumber = _interopRequireDefault(require("./isnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Convert index to letter (e.g 0 -> A)
function columnletter(index) {
  if (!(0, _isnumber.default)(index)) {
    return _error.ERRORTYPES.value;
  } // The column is determined by applying a modified Hexavigesimal algorithm.
  // Normally BA follows Z but spreadsheets count wrong and nobody cares.
  // Instead they do it in a way that makes sense to most people but
  // is mathmatically incorrect. So AA follows Z which in the base 10
  // system is like saying 01 follows 9.
  // In the least significant digit
  // A..Z is 0..25
  // For the second to nth significant digit
  // A..Z is 1..26


  var converted = "",
      secondPass = false,
      remainder,
      value = Math.abs(index);

  do {
    remainder = value % 26;

    if (secondPass) {
      remainder--;
    }

    converted = String.fromCharCode(remainder + "A".charCodeAt(0)) + converted;
    value = Math.floor((value - remainder) / 26);
    secondPass = true;
  } while (value > 0);

  return converted;
}
