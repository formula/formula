"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _isarray = _interopRequireDefault(require("./isarray"));

var _error = require("./error");

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// pluck a property from a list of objects.
function pluck(prop, list) {
  // Ensure that the list is an array.
  if (!(0, _isarray.default)(list)) {
    return _error.ERRORTYPES.na;
  } // Map the list to the property.


  return (0, _map.default)(list, function (d) {
    return d[prop];
  });
}
