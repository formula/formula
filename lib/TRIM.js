'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TRIM = TRIM;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TRIM(text) {
    if (typeof text !== 'string') {
        return _ERROR2.default.value;
    }
    return text.trim();
}