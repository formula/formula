"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EQ = EQ;
function EQ(a, b) {
  // Unlike JavaScript the string comparisions are case-insensitive
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() === b.toLowerCase();
  } else {
    return a === b;
  }
}