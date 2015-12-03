'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISRANGE = ISRANGE;
function ISRANGE(v) {
  return v.constructor.name === 'RANGE';
}