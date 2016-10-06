'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hour;

var _trunc = require('./trunc');

var _trunc2 = _interopRequireDefault(_trunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hour(value) {
    // remove numbers before decimal place and convert fraction to 24 hour scale.
    return (0, _trunc2.default)((value - (0, _trunc2.default)(value)) * 24);
}
module.exports = exports['default'];