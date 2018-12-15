"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pv;

var _error = require("./error");

var _isblank = _interopRequireDefault(require("./isblank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function pv(rate, periods, payment) {
  var future = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  // is this error code correct?
  if ((0, _isblank.default)(rate)) return _error.ERRORTYPES.na;
  if ((0, _isblank.default)(periods)) return _error.ERRORTYPES.na;
  if ((0, _isblank.default)(payment)) return _error.ERRORTYPES.na;

  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return ((1 - Math.pow(1 + rate, periods)) / rate * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
  }
}
