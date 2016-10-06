'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eomonth;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 Peter W Moresi

function eomonth(start_date, months) {
  start_date = (0, _parsedate2.default)(start_date);

  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return _error2.default.value;
  }
  months = parseInt(months, 10);
  return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0);
}
module.exports = exports['default'];