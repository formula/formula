'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iswholenumber;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns true when the value is a whole number
function iswholenumber(value) {
    return (0, _isnumber2.default)(value) && value % 1 === 0;
} // Copyright 2015 Peter W Moresi
module.exports = exports['default'];