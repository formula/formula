"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

var _isblank = _interopRequireDefault(require("./isblank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// get a property (p) from an object (o)
function get(p, o) {
  return o[p];
}
