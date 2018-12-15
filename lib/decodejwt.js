"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodejwt;

var _decodebase = _interopRequireDefault(require("./decodebase64"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function decodejwt(token) {
  function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call((0, _decodebase.default)(str), function (c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }

  return JSON.parse(b64DecodeUnicode(token.split(".")[1]));
}
