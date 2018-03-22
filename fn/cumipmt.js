"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iserror = require("./iserror");

var _iserror2 = _interopRequireDefault(_iserror);

var _error = require("./error");

var _error2 = _interopRequireDefault(_error);

var _numbervalue = require("./numbervalue");

var _numbervalue2 = _interopRequireDefault(_numbervalue);

var _pmt = require("./pmt");

var _pmt2 = _interopRequireDefault(_pmt);

var _fv = require("./fv");

var _fv2 = _interopRequireDefault(_fv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cumipmt(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  rate = (0, _numbervalue2.default)(rate);
  periods = (0, _numbervalue2.default)(periods);
  value = (0, _numbervalue2.default)(value);

  // check if any inputs are errors.
  if ((0, _iserror2.default)(rate) || (0, _iserror2.default)(periods) || (0, _iserror2.default)(value)) {
    return _error2.default.value;
  }

  // Return error if either rate, periods, or value are lower than or equal to zero
  if (rate <= 0 || periods <= 0 || value <= 0) {
    return _error2.default.num;
  }

  // Return error if start < 1, end < 1, or start > end
  if (start < 1 || end < 1 || start > end) {
    return _error2.default.num;
  }

  // Return error if type is neither 0 nor 1
  if (type !== 0 && type !== 1) {
    return _error2.default.num;
  }

  // Compute cumulative interest
  var payment = (0, _pmt2.default)(rate, periods, value, 0, type);
  var interest = 0;

  if (start === 1) {
    if (type === 0) {
      interest = -value;
      start++;
    }
  }

  for (var i = start; i <= end; i++) {
    if (type === 1) {
      interest += (0, _fv2.default)(rate, i - 2, payment, value, 1) - payment;
    } else {
      interest += (0, _fv2.default)(rate, i - 1, payment, value, 0);
    }
  }
  interest *= rate;

  // Return cumulative interest
  return interest;
}

exports.default = cumipmt;
module.exports = exports["default"];