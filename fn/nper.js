'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nper;

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nper(rate, pmt, pv, fv, type) {
  var log, result;
  rate = parseFloat(rate || 0);
  pmt = parseFloat(pmt || 0);
  pv = parseFloat(pv || 0);
  fv = fv || 0;
  type = type || 0;

  log = function log(prim) {
    if ((0, _isnan2.default)(prim)) {
      return Math.log(0);
    }
    var num = Math.log(prim);
    return num;
  };

  if (rate == 0.0) {
    result = -(pv + fv) / pmt;
  } else if (type > 0.0) {
    result = log(-(rate * fv - pmt * (1.0 + rate)) / (rate * pv + pmt * (1.0 + rate))) / log(1.0 + rate);
  } else {
    result = log(-(rate * fv - pmt) / (rate * pv + pmt)) / log(1.0 + rate);
  }

  if ((0, _isnan2.default)(result)) {
    result = 0;
  }

  return result;
} // Copyright 2015 JC Fisher
module.exports = exports['default'];