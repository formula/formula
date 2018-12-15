"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;

var _reduce = _interopRequireDefault(require("./reduce"));

var _error = require("./error");

var _isarray = _interopRequireDefault(require("./isarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// FLATTEN converts a nested array into a flattened array.
function flatten(ref) {
  if (!(0, _isarray.default)(ref)) {
    return _error.ERRORTYPES.value;
  }

  return (0, _reduce.default)(ref, function (a, b) {
    return a.concat(b);
  }, []);
}
