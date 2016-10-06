'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clean;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CLEAN accepts an object and remove properties that are blank.
// Copyright 2015 Peter W Moresi

function clean(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter(function (n) {
    return !(0, _isblank2.default)(obj[n]);
  });

  // Compute object with only non-blank keys.
  return (0, _select2.default)(keys, obj);
}
module.exports = exports['default'];