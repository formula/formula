'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISERROR = ISERROR;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISERR = require('./ISERR');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ISERROR(value) {
    return (0, _ISERR.ISERR)(value) || value === _ERROR2.default.na;
}