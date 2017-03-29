'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fv;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 JC Fisher

function fv(rate, periods, payment) {
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;


  // is this error code correct?
  if ((0, _isblank2.default)(rate)) return _error2.default.na;
  if ((0, _isblank2.default)(periods)) return _error2.default.na;
  if ((0, _isblank2.default)(payment)) return _error2.default.na;

  var fv;
  if (rate === 0) {
    fv = value + payment * periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      fv = value * term + payment * (1 + rate) * (term - 1) / rate;
    } else {
      fv = value * term + payment * (term - 1) / rate;
    }
  }
  return -fv;
};
module.exports = exports['default'];