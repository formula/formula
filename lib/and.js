"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = and;

var _iserror = _interopRequireDefault(require("./iserror"));

var _error = require("./error");

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// AND reduces list of truthy values into true or false value.
function and() {
  for (var _len = arguments.length, criteria = new Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  // Reduce criteria into boolean value.
  return (0, _reduce.default)(criteria, function (acc, item) {
    // Once an error, always an error.
    if ((0, _iserror.default)(acc)) return acc; // Once `false` or #error! is found always return previously value.

    if (acc === 0 || acc === false) return false; // find the value if a literal or deferred value.

    var val = (0, _isfunction.default)(item) ? item() : item; // return `#VALUE!` if not true, false, 1 or 0.

    if (!(val === true || val === false || val === 1 || val === 0)) {
      return _error.ERRORTYPES.value;
    } // Return true when value is true or 1.


    return val === true || val === 1;
  }, undefined);
}
