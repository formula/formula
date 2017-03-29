'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pluck a property from a list of objects
// Copyright 2015 JC Fisher

function pluck(prop, list) {
  if (!(0, _isarray2.default)(list)) {
    return _error2.default.na;
  }

  return list.map(function (d) {
    return d[prop];
  });
}
module.exports = exports['default'];