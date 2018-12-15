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
function ipmt(rate, period, periods, present) {
  var future = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  // parse numbers from input.
  rate = (0, _numbervalue.default)(rate);
  period = (0, _numbervalue.default)(period);
  periods = (0, _numbervalue.default)(periods);
  present = (0, _numbervalue.default)(present);
  future = (0, _numbervalue.default)(future);
  type = (0, _numbervalue.default)(type);

  if ((0, _iserror.default)(rate, period, periods, present, future, type)) {
    return _error.default.value;
  } // Compute payment


  var payment = (0, _pmt.default)(rate, periods, present, future, type); // Compute interest

  var interest;

  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = (0, _fv.default)(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = (0, _fv.default)(rate, period - 1, payment, present, 0);
    }
  } // Return interest


  return interest * rate;
}

var _default = ipmt;
exports.default = _default;
