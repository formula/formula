'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isleapyear;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isleapyear(val) {
    var date = (0, _parsedate2.default)(val);
    var year = date.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
} // Copyright 2015 JC Fisher

module.exports = exports['default'];