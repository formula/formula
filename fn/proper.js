'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = proper;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPER converts text into proper case.
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
    if (Number.isNaN(text) && typeof text === 'number') {
        return _error2.default.value;
    }
    if (typeof text === 'number') {
        text = '' + text;
    }

    return text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
} // Copyright 2015 JC Fisher

module.exports = exports['default'];