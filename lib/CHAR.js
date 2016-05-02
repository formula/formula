"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHAR = CHAR;
// Copyright 2015 Peter W Moresi

// CHAR convert number into character (e.g 65 => 'A')
function CHAR(number) {
  return String.fromCharCode(number);
}