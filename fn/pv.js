'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pv;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 JC Fisher

function pv(rate, periods, payment) {
  var future = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;


  // is this error code correct?
  if ((0, _isblank2.default)(rate)) return _error2.default.na;
  if ((0, _isblank2.default)(periods)) return _error2.default.na;
  if ((0, _isblank2.default)(payment)) return _error2.default.na;

  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return ((1 - Math.pow(1 + rate, periods)) / rate * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
  }
};
module.exports = exports['default'];