'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFEMPTY = IFEMPTY;

var _ISEMPTY = require('./ISEMPTY');

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
function IFEMPTY(value, value_if_empty) {
    return (0, _ISEMPTY.ISEMPTY)(value) ? value_if_empty : value;
} // Copyright 2015 Peter W Moresi