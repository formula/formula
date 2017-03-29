'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MIN returns the smallest number from a `list`.
function min() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  var values = (0, _flatten2.default)(list);
  if (values.length === 0) return;
  return values.reduce(function (min, next) {
    if ((0, _isblank2.default)(min)) return next;else if ((0, _isnumber2.default)(next)) return Math.min(min, next);else return min;
  });
} // Copyright 2015 JC Fisher

module.exports = exports['default'];