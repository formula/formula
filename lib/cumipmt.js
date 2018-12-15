"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iserror = _interopRequireDefault(require("./iserror"));

var _error = _interopRequireDefault(require("./error"));

var _numbervalue = _interopRequireDefault(require("./numbervalue"));

var _pmt = _interopRequireDefault(require("./pmt"));

var _fv = _interopRequireDefault(require("./fv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function cumipmt(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  rate = (0, _numbervalue.default)(rate);
  periods = (0, _numbervalue.default)(periods);
  value = (0, _numbervalue.default)(value); // check if any inputs are errors.

  if ((0, _iserror.default)(rate) || (0, _iserror.default)(periods) || (0, _iserror.default)(value)) {
    return _error.default.value;
  } // Return error if either rate, periods, or value are lower than or equal to zero


  if (rate <= 0 || periods <= 0 || value <= 0) {
    return _error.default.num;
  } // Return error if start < 1, end < 1, or start > end


  if (start < 1 || end < 1 || start > end) {
    return _error.default.num;
  } // Return error if type is neither 0 nor 1


  if (type !== 0 && type !== 1) {
    return _error.default.num;
  } // Compute cumulative interest


  var payment = (0, _pmt.default)(rate, periods, value, 0, type);
  var interest = 0;

  if (start === 1) {
    if (type === 0) {
      interest = -value;
      start++;
    }
  }

  for (var i = start; i <= end; i++) {
    if (type === 1) {
      interest += (0, _fv.default)(rate, i - 2, payment, value, 1) - payment;
    } else {
      interest += (0, _fv.default)(rate, i - 1, payment, value, 0);
    }
  }

  interest *= rate; // Return cumulative interest

  return interest;
}

var _default = cumipmt;
exports.default = _default;
