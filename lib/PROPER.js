'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PROPER = PROPER;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPER converts text into proper case.
function PROPER(text) {
    if (text === undefined || text.length === 0) {
        return _ERROR2.default.value;
    }
    if (text === true) {
        text = 'TRUE';
    }
    if (text === false) {
        text = 'FALSE';
    }
    if (isNaN(text) && typeof text === 'number') {
        return _ERROR2.default.value;
    }
    if (typeof text === 'number') {
        text = '' + text;
    }

    return text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
} // Copyright 2015 Peter W Moresi