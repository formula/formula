"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notincludes;

var _includes = _interopRequireDefault(require("./includes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// notincludes returns true when the searchElement is not found in the searchList.
function notincludes(searchElement, searchList, fromIndex) {
  return !(0, _includes.default)(searchElement, searchList, fromIndex);
}
