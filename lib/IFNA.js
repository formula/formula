'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFNA = IFNA;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
function IFNA(value, value_if_na) {
    return value === _ERROR2.default.na ? value_if_na : value;
} // Copyright 2015 Peter W Moresi