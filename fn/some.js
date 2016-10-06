'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = some;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _eq = require('./eq');

var _eq2 = _interopRequireDefault(_eq);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// INT returns true when a needle is found in a list.
// Copyright 2015 Peter W Moresi

function some(needle, list) {

  // Return `#NA!` when the needle and list are blank.
  if ((0, _isblank2.default)(needle) && (0, _isblank2.default)(list)) {
    return _error2.default.na;
  }

  // Return `#NA!` when the list is not an array.
  if (!(0, _isarray2.default)(list)) {
    return _error2.default.na;
  }

  // Return true when some of the values match the needle.
  return list.some(function (n) {
    return (0, _eq2.default)(n, needle);
  });
}
module.exports = exports['default'];