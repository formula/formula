'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SUM = SUM;

var _FLATTEN = require('./FLATTEN');

function SUM() {
    var numbers = (0, _FLATTEN.FLATTEN)(arguments);
    return numbers.reduce(function (a, b) {
        return a + b;
    });
}