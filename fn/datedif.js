"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = datedif;

var _parsedate = require("./parsedate");

var _parsedate2 = _interopRequireDefault(_parsedate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DATEDIF return the difference between two dates given a start date, end date and unit.
function datedif(start_date, end_date, unit) {
  var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;
  start_date = (0, _parsedate2.default)(start_date), end_date = (0, _parsedate2.default)(end_date);

  var timediff = end_date - start_date;
  if (Number.isNaN(timediff)) return NaN;

  switch (unit) {
    case "Y":
      return end_date.getFullYear() - start_date.getFullYear();
    case "M":
      return end_date.getFullYear() * 12 + end_date.getMonth() - (start_date.getFullYear() * 12 + start_date.getMonth());
    case "W":
      return Math.floor(timediff / week);
    case "D":
      return Math.floor(timediff / day);
    case "MD":
      return end_date.getdate() - start_date.getdate();
    case "YM":
      return end_date.getMonth() - start_date.getMonth();
    case "YD":
      return new error("NOT IMPLEMENTED");
    default:
      return undefined;
  }
} // Copyright 2015 Peter W Moresi
module.exports = exports["default"];