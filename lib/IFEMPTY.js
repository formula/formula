'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFEMPTY = IFEMPTY;

var _ISEMPTY = require('./ISEMPTY');

function IFEMPTY(value, value_if_empty) {
    return (0, _ISEMPTY.ISEMPTY)(value) ? value_if_empty : value;
}