"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isuppercase;
// Copyright 2015-2018 FormBucket LLC
var ACode = 65;
var ZCode = 90;

function isUpperCaseChar(ch) {
  var chCode = ch.charCodeAt();
  return chCode >= ACode && chCode <= ZCode;
}

function isuppercase(str) {
  for (var i in str) {
    if (!isUpperCaseChar(str[i])) return false;
  }

  return true;
}
