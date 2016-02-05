"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUND = ROUND;
function ROUND(number, precision) {
  return +number.toFixed(precision);
}