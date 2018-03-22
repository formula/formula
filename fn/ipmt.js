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

function ipmt(rate, period, periods, present) {
  var future = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  // parse numbers from input.
  rate = (0, _numbervalue2.default)(rate);
  period = (0, _numbervalue2.default)(period);
  periods = (0, _numbervalue2.default)(periods);
  present = (0, _numbervalue2.default)(present);
  future = (0, _numbervalue2.default)(future);
  type = (0, _numbervalue2.default)(type);

  if ((0, _iserror2.default)(rate, period, periods, present, future, type)) {
    return _error2.default.value;
  }

  // Compute payment
  var payment = (0, _pmt2.default)(rate, periods, present, future, type);

  // Compute interest
  var interest;
  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = (0, _fv2.default)(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = (0, _fv2.default)(rate, period - 1, payment, present, 0);
    }
  }

  // Return interest
  return interest * rate;
}

exports.default = ipmt;
module.exports = exports["default"];