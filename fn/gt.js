'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gt;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 JC Fisher

function gt(a, b) {
  if ((0, _isref2.default)(a) && (0, _isref2.default)(b)) {
    return _error2.default.na;
  } else if ((0, _isarray2.default)(a) && (0, _isarray2.default)(b)) {
    return _error2.default.na;
  } else if ((0, _isref2.default)(a) || (0, _isarray2.default)(a)) {
    return (0, _map2.default)(a, function (d) {
      return d > b;
    });
  } else if ((0, _isref2.default)(b) || (0, _isarray2.default)(b)) {
    return (0, _map2.default)(a, function (d) {
      return d > a;
    });
  } else {
    return a > b;
  }
}
module.exports = exports['default'];