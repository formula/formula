'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPT = REPT;
function REPT(t, n) {
  var r = '';
  for (var i = 0; i < n; i++) {
    r += t;
  }
  return r;
}