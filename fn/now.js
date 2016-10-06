'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = now;

var _datevalue = require('./datevalue');

var _datevalue2 = _interopRequireDefault(_datevalue);

var _timevalue = require('./timevalue');

var _timevalue2 = _interopRequireDefault(_timevalue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function now() {
  var d = new Date();
  return (0, _datevalue2.default)(d.toLocaleDateString()) + (0, _timevalue2.default)(d.toLocaleTimeString());
};
module.exports = exports['default'];