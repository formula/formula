'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = and;

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AND reduces list of truthy values into true or false value
// Copyright 2015 JC Fisher

function and() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  // Reduce criteria into boolean value.
  return (0, _reduce2.default)(criteria, function (acc, item) {

    if ((0, _iserror2.default)(acc)) return acc;

    // Once `false` or #error! is found always return previously value
    if (acc === 0 || acc === false) return false;

    // find the value if a literal or deferred value
    var val = (0, _isfunction2.default)(item) ? item() : item;

    // return `#VALUE!` if not true, false, 1 or 0
    if (val !== true && val !== false && val !== 1 && val !== 0) {
      return _error2.default.value;
    }

    // Return true when value is true or 1
    return val === true || val === 1;
  });
}
module.exports = exports['default'];