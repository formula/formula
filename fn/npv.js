"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = npv;
function npv(rate) {
    rate = rate * 1;
    var factor = 1,
        sum = 0;

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < values.length; i++) {
        var factor = factor * (1 + rate);
        sum += values[i] / factor;
    }

    return sum;
}
module.exports = exports["default"];