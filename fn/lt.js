'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lt;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LT compares two values and returns true when a is less than b.
function lt(a, b) {
  if ((0, _isref2.default)(a) && (0, _isref2.default)(b)) {
    return error.na;
  } else if ((0, _isarray2.default)(a) && (0, _isarray2.default)(b)) {
    return error.na;
  } else if ((0, _isref2.default)(a) || (0, _isarray2.default)(a)) {
    return (0, _map2.default)(a, function (d) {
      return d < b;
    });
  } else if ((0, _isref2.default)(b) || (0, _isarray2.default)(b)) {
    return (0, _map2.default)(a, function (d) {
      return d < a;
    });
  } else {
    return a < b;
  }
} // Copyright 2015 JC Fisher

module.exports = exports['default'];