"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = address;

var _columnletter = _interopRequireDefault(require("./columnletter"));

var _iserror = _interopRequireDefault(require("./iserror"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ADDRESS converts a row and column into an address (e.g A1)
function address(row, col, absolute_relative_mode, use_a1_notation, sheet) {
  // convert column number into letter
  var colLetter = (0, _columnletter.default)(col - 1);

  switch (absolute_relative_mode) {
    // Mode 0 returns `{column}{LETTER}`
    case 0:
      return colLetter + row.toString();
    // Mode 2 returns `{column}${LETTER}`

    case 2:
      return colLetter + "$" + row.toString();
    // Mode 3 returns `${column}{LETTER}`

    case 3:
      return "$" + colLetter + row.toString();
    // Default mode returns `${column}${LETTER}`

    default:
      return "$" + colLetter + "$" + row.toString();
  }
}
