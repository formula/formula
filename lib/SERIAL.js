'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SERIAL = SERIAL;

var _CONSTANTS = require('./CONSTANTS');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert a date object into a serial number.
// Credit: https://github.com/sutoiku/formula.js/
function SERIAL(date) {
    if (date.constructor.name !== 'Date') return _ERROR2.default.na;
    var diff = Math.ceil((date - _CONSTANTS.d1900) / _CONSTANTS.MilliSecondsInDay);
    return diff + (diff > 59 ? 2 : 1);
}