'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFBLANK = IFBLANK;

var _ISBLANK = require('./ISBLANK');

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
function IFBLANK(value, value_if_blank) {
    return (0, _ISBLANK.ISBLANK)(value) ? value_if_blank : value;
} // Copyright 2015 Peter W Moresi