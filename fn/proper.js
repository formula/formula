'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = proper;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPER converts text into proper case.
// Copyright 2015 JC Fisher

function proper(text) {
    if (text === undefined || text.length === 0) {
        return _error2.default.value;
    }
    if (text === true) {
        text = 'TRUE';
    }
    if (text === false) {
        text = 'FALSE';
    }
    if ((0, _isnan2.default)(text) && typeof text === 'number') {
        return _error2.default.value;
    }
    if (typeof text === 'number') {
        text = '' + text;
    }

    return text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
module.exports = exports['default'];