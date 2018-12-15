"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concatenate;

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// CONCATENATE reduces a list of values into a single string.
function concatenate() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Combine into a single string value
  return (0, _reduce.default)(values, function (acc, item) {
    return "".concat(acc).concat(item);
  }, "");
}
