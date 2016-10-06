'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iferror;

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if error, otherwise it returns `value_if_error`.
function iferror(value) {
    var value_if_error = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    return (0, _iserror2.default)(value) ? value_if_error : value;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];