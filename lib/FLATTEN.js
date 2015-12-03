"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLATTEN = FLATTEN;
function FLATTEN(ref) {
  return ref.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}