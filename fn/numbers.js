'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbers;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 JC Fisher

function numbers() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return (0, _reduce2.default)(values, function (p, v) {
    return (0, _isnumber2.default)(v) ? p.concat(v) : p;
  }, []);
}
module.exports = exports['default'];