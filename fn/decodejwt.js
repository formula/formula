'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = decodejwt;

var _decodebase = require('./decodebase64');

var _decodebase2 = _interopRequireDefault(_decodebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decodejwt(token) {

    function b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map.call((0, _decodebase2.default)(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    return JSON.parse(b64DecodeUnicode(token.split('.')[1]));
} // Copyright 2015 JC Fisher

module.exports = exports['default'];