'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iserror;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _iserr = require('./iserr');

var _iserr2 = _interopRequireDefault(_iserr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERROR returns true when the value is an error.
// Copyright 2015 JC Fisher

function iserror(value) {
    return (0, _iserr2.default)(value) || value === _error2.default.na;
}
module.exports = exports['default'];