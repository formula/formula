'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFBLANK = IFBLANK;

var _ISBLANK = require('./ISBLANK');

function IFBLANK(value, value_if_blank) {
    return (0, _ISBLANK.ISBLANK)(value) ? value_if_blank : value;
}