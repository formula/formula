'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pmt;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PMT returns a loan payment
// Copyright 2015 JC Fisher

function pmt(rate, periods, present) {
  var future = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;


  if (!(0, _isnumber2.default)(rate) || !(0, _isnumber2.default)(periods)) {
    return _error2.default.value;
  }

  if (rate === 0) {
    return -((present + future) / periods);
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      return -((future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate));
    } else {
      return -(future * rate / (term - 1) + present * rate / (1 - 1 / term));
    }
  }
};
module.exports = exports['default'];