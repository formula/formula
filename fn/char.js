"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = char;
// Copyright 2015 Peter W Moresi

// CHAR convert number into character (e.g 65 => 'A')
function char(number) {
  return String.fromCharCode(number);
}
module.exports = exports["default"];