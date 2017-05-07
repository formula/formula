'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concatenate;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONCATENATE reduces a list of values into a single string.
function concatenate() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Combine into a single string value
  return (0, _reduce2.default)(values, function (acc, item) {
    return '' + acc + item;
  }, '');
} // Copyright 2015 JC Fisher
module.exports = exports['default'];