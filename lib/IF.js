'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IF = IF;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IF(value, value_if_true, value_if_false) {
  return value || typeof value === 'string' && value.toLowerCase() === 'true' ? value_if_true : value_if_false;
}