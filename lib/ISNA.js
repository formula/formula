'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISNA = ISNA;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ISNA(value) {
  return value === _ERROR2.default.na;
}