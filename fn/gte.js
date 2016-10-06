'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gte;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 Peter W Moresi

function gte(a, b) {
  if ((0, _isref2.default)(a) && (0, _isref2.default)(b)) {
    return error.na;
  } else if ((0, _isarray2.default)(a) && (0, _isarray2.default)(b)) {
    return error.na;
  } else if ((0, _isref2.default)(a) || (0, _isarray2.default)(a)) {
    return a.map(function (d) {
      return d >= b;
    });
  } else if ((0, _isref2.default)(b) || (0, _isarray2.default)(b)) {
    return b.map(function (d) {
      return d >= a;
    });
  } else {
    return a >= b;
  }
}
module.exports = exports['default'];