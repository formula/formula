'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISREF = ISREF;
function ISREF(ref) {
  return ref.hasOwnProperty('topLeft');
}