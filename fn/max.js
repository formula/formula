'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MAX returns the largest number from a `list`.
function max() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  var values = (0, _flatten2.default)(list);
  if (values.length === 0) return;
  return values.reduce(function (max, next) {
    if ((0, _isblank2.default)(max)) return next;else if ((0, _isnumber2.default)(next)) return Math.max(max, next);else return max;
  });
} // Copyright 2015 JC Fisher

module.exports = exports['default'];