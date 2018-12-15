"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nor;

var _not = _interopRequireDefault(require("./not"));

var _or = _interopRequireDefault(require("./or"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function nor() {
  return (0, _not.default)(_or.default.apply(void 0, arguments));
}
