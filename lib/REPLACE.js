'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPLACE = REPLACE;

var _ISERROR = require('./ISERROR');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function REPLACE(text, position, length, new_text) {

  if ((0, _ISERROR.ISERROR)(position) || (0, _ISERROR.ISERROR)(length) || typeof text !== 'string' || typeof new_text !== 'string') {
    return _ERROR2.default.value;
  }
  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
}