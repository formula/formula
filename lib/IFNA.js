'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFNA = IFNA;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IFNA(value, value_if_na) {
    return value === _ERROR2.default.na ? value_if_na : value;
}