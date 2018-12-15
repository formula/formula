"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelcase;

var _istext = _interopRequireDefault(require("./istext"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// convert snakecase to camelcase.
function camelcase(value) {
  // Return `#VALUE!` if not text input.
  if (!(0, _istext.default)(value)) {
    return _error.ERRORTYPES.value;
  } // converts -c into C and _c in C for every matched character.


  return value.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : "";
  }).replace(/_+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
}
