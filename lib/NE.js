"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NE = NE;
function NE(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() !== b.toLowerCase();
  } else {
    return a !== b;
  }
}