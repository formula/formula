'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVERAGE = AVERAGE;

var _SUM = require('./SUM');

function AVERAGE() {
  return _SUM.SUM.apply(undefined, arguments) / arguments.length;
}