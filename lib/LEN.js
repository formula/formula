'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEN = LEN;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LEN(text) {
  if (arguments.length === 0) {
    return _ERROR2.default.error;
  }

  if (typeof text === 'string') {
    return text.length;
  }

  if (text.length) {
    return text.length;
  }

  return _ERROR2.default.value;
};