"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = npv;

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// `npv` returns the net present value of an investment.
function npv(rate) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var result = (0, _reduce.default)(values, function (p, v) {
    var factor = p.factor * (1 + rate);
    var sum = p.sum + +v / factor;
    return {
      factor: factor,
      sum: sum
    };
  }, {
    factor: 1,
    sum: 0
  });
  return result.sum;
}
