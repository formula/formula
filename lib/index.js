"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _error = require("./error");

var _isarray = _interopRequireDefault(require("./isarray"));

var _isblank = _interopRequireDefault(require("./isblank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// index returns the value in a row and column from a 2d array
function index(reference, row_num) {
  var column_num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var row;

  if (!(0, _isarray.default)(reference) || (0, _isblank.default)(row_num)) {
    return _error.ERRORTYPES.value;
  }

  if (reference.length < row_num) {
    return _error.ERRORTYPES.ref;
  }

  row = reference[row_num - 1];

  if (!(0, _isarray.default)(row)) {
    return _error.ERRORTYPES.value;
  }

  if (row.length < column_num) {
    return _error.ERRORTYPES.ref;
  }

  return row[column_num - 1];
}
