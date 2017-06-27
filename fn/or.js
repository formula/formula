'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = or;

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns true when any of the criteria are true or 1, defaults to false.
// Copyright 2015 JC Fisher

function or() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return (0, _reduce2.default)(criteria, function (acc, item) {

    // If accumulator is already true then it's still true.
    if (acc === true) return true;

    // Determine the value by resolving thunks if needed.
    var value = (0, _isfunction2.default)(item) ? item() : item;

    // Return true when value is true or 1.
    return value === true || value === 1;
  }, false);
}
module.exports = exports['default'];