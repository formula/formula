'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _branch = require('./branch');

var _branch2 = _interopRequireDefault(_branch);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _run = require('./run');

var _run2 = _interopRequireDefault(_run);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FILTER limits a range based on arrays of boolean values.
function filter(range) {
  for (var _len = arguments.length, filters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filters[_key - 1] = arguments[_key];
  }

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makefilter() {
    return function (value, index) {
      return (0, _reduce2.default)(filters, function (previousValue, currentValue) {
        if (previousValue === false) {
          return false;
        } else {
          return (0, _branch2.default)((0, _isarray2.default)(currentValue), function () {
            return currentValue[index];
          }, (0, _isfunction2.default)(currentValue), function () {
            return currentValue(value, index);
          }, (0, _istext2.default)(currentValue), function () {
            return (0, _run2.default)(currentValue, value);
          }, _error2.default.na);
        }
      }, true);
    };
  }

  return range.filter(makefilter());
} // Copyright 2015 JC Fisher
module.exports = exports['default'];