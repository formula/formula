"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = vlookup;

var _error = require("./error");

var _isblank = _interopRequireDefault(require("./isblank"));

var _iserror = _interopRequireDefault(require("./iserror"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// VLOOKUP find a needle in a table searching vertically.
function vlookup(needle) {
  var table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var exactmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0, _iserror.default)(needle) || (0, _isblank.default)(needle)) {
    return needle;
  }

  for (var i = 0; i < table.length; i++) {
    var row = table[i];

    if (index > row.length) {
      return _error.ERRORTYPES.ref;
    }

    if (exactmatch && row[0] === needle || row[0] == needle || typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) {
      return index < row.length + 1 ? row[index - 1] : row[0];
    }
  }

  return _error.ERRORTYPES.na;
}
