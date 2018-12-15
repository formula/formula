"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parsequery;

var _error = require("./error");

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// parse querystring into object
function parsequery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (typeof query !== "string") {
    return _error.ERRORTYPES.na;
  }

  if (query.length === 0) {
    return {};
  }

  return (0, _reduce.default)((query[0] === "?" ? query.substr(1) : query).split("&"), function (acc, item) {
    var n = item.split("=");
    var key = decodeURIComponent(n[0]);
    var value = decodeURIComponent(n[1] || "");
    acc[key] = value;
    return acc;
  }, {});
}
