'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = istruthy;

var _isfalsy = require('./isfalsy');

var _isfalsy2 = _interopRequireDefault(_isfalsy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns true when the value is not falsey
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
function istruthy(value) {
    return !(0, _isfalsy2.default)(value);
} // Copyright 2015 JC Fisher

;
module.exports = exports['default'];