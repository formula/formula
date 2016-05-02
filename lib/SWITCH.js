'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH = SWITCH;

var _COND = require('./COND');

// SWITCH is alias for COND
function SWITCH() {
  return _COND.COND.apply(undefined, arguments);
} // Copyright 2015 Peter W Moresi

;