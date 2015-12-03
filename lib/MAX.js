'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAX = MAX;

var _FLATTEN = require('./FLATTEN');

function MAX() {
    (0, _FLATTEN.FLATTEN)(arguments).reduce(function (max, next) {
        if (typeof x !== 'number' || x !== x) {
            return max;
        }

        return Math.max(max, next);
    });
}