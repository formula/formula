"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = islowercase;
// Copyright 2015-2018 FormBucket LLC
var aCode = 97;
var zCode = 122;

function isLowerCaseChar(ch) {
  var chCode = ch.charCodeAt();
  return chCode >= aCode && chCode <= zCode;
}

function islowercase(str) {
  for (var i in str) {
    if (!isLowerCaseChar(str[i])) return false;
  }

  return true;
}
