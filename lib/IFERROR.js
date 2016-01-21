'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFERROR = IFERROR;

var _ISERROR = require('./ISERROR');

function IFERROR(value) {
    var value_if_error = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    return (0, _ISERROR.ISERROR)(value) ? value_if_error : value;
}