'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = today;

var _datevalue = require('./datevalue');

var _datevalue2 = _interopRequireDefault(_datevalue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function today() {
  var d = new Date();
  return (0, _datevalue2.default)(d.toLocaleDateString());
} // Copyright 2015 JC Fisher

;
module.exports = exports['default'];