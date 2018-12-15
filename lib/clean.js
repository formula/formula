"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clean;

var _isblank = _interopRequireDefault(require("./isblank"));

var _select = _interopRequireDefault(require("./select"));

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// CLEAN accepts an object and remove properties that are blank.
function clean(obj) {
  // Compute keys where value is non blank.
  var keys = (0, _keys.default)(obj).filter(function (n) {
    return !(0, _isblank.default)(obj[n]);
  }); // Compute object with only non-blank keys.

  return (0, _select.default)(keys, obj);
}
