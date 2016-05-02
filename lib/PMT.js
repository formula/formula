'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PMT = PMT;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PMT returns a loan payment
// Copyright 2015 Peter W Moresi

function PMT(rate, periods, present) {
  var future = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
  var type = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

  if (!(0, _ISNUMBER.ISNUMBER)(rate) || !(0, _ISNUMBER.ISNUMBER)(periods)) {
    return _ERROR2.default.value;
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