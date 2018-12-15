"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbervalue;

var _reduce = _interopRequireDefault(require("./reduce"));

var _isempty = _interopRequireDefault(require("./isempty"));

var _iserror = _interopRequireDefault(require("./iserror"));

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

var _split = _interopRequireDefault(require("./split"));

var _code = _interopRequireDefault(require("./code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Convert a text value into a number value.
function numbervalue(text) {
  var decimal_separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".";
  var group_separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ",";

  // Return error when text is error
  if ((0, _iserror.default)(text)) {
    return text;
  } // Return `#VALUE!` when text is empty


  if ((0, _isempty.default)(text)) {
    return _error.ERRORTYPES.value;
  } // Return the value when it is already a number.


  if ((0, _isnumber.default)(text)) {
    return text;
  }

  var foundDecimal = false,
      len = text.length - 1;

  if (text.length === 1) {
    if ((0, _code.default)(text, 0) < 48 || (0, _code.default)(text, 0) > 57) {
      return _error.ERRORTYPES.value;
    }

    return +text;
  }

  return (0, _reduce.default)((0, _split.default)(text, ""), function (acc, item, index) {
    if (acc === _error.ERRORTYPES.value) {
      return _error.ERRORTYPES.value;
    } else if (len === index) {
      if (item === "%") {
        return +acc / 100;
      }

      return +acc.concat(item);
    } else if (item === decimal_separator) {
      if (foundDecimal) return _error.ERRORTYPES.value;
      foundDecimal = true;
      return acc.concat(".");
    } else if (item === group_separator) {
      return acc; // check if between 0 and 9 ascii codes
    } else if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) {
      return _error.ERRORTYPES.value;
    }

    return acc.concat(item);
  });
}
