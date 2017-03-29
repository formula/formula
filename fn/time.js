'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = time;

var _constants = require('./constants');

function time(hour, minute, second) {
  return +((hour * 3600 + minute * 60 + second) / _constants.SecondsInDay).toFixed(15);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];