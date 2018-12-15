"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hlookup;

var _isblank = _interopRequireDefault(require("./isblank"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Find a needle in a table searching horizontally.
function hlookup(needle, table) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var exactmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (typeof needle === "undefined" || (0, _isblank.default)(needle)) {
    return null;
  }

  if (index > table.length) {
    return _error.ERRORTYPES.ref;
  }

  var needleLower = (needle + "").toLowerCase(),
      row = table[0];

  for (var i = 0; i < row.length; i++) {
    if (exactmatch && row[i] === needle || row[i] == needle || typeof row[i] === "string" && row[i].toLowerCase().indexOf(needleLower) != -1) {
      return table[index - 1][i];
    }
  }

  return _error.ERRORTYPES.na;
}
