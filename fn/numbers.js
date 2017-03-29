'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbers;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function numbers() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values);
  return values.reduce(function (p, v) {
    return (0, _isnumber2.default)(v) ? p.concat(v) : p;
  }, []);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];