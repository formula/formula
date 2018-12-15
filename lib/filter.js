"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _error = require("./error");

var _branch = _interopRequireDefault(require("./branch"));

var _reduce = _interopRequireDefault(require("./reduce"));

var _isarray = _interopRequireDefault(require("./isarray"));

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _istext = _interopRequireDefault(require("./istext"));

var _run = _interopRequireDefault(require("./run"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// FILTER limits a range based on arrays of boolean values.
function filter(range) {
  for (var _len = arguments.length, filters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filters[_key - 1] = arguments[_key];
  }

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.
  function makefilter() {
    return function (value, index) {
      return (0, _reduce.default)(filters, function (previousValue, currentValue) {
        if (previousValue === false) {
          return false;
        } else {
          return (0, _branch.default)((0, _isarray.default)(currentValue), function () {
            return currentValue[index];
          }, (0, _isfunction.default)(currentValue), function () {
            return currentValue(value, index);
          }, (0, _istext.default)(currentValue), function () {
            return (0, _run.default)(currentValue, value);
          }, _error.ERRORTYPES.na);
        }
      }, true);
    };
  }

  return range.filter(makefilter());
}
