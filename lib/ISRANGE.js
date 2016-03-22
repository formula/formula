'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISRANGE = ISRANGE;

var _ISBLANK = require('./ISBLANK');

function ISRANGE(v) {
  return !(0, _ISBLANK.ISBLANK)(v) && v.constructor.name === 'RANGE';
}