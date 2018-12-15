"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surroundKeys;

var _reduce = _interopRequireDefault(require("./reduce"));

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Creates a new object where all of the keys are surrounded by
// start and end delimiters.
function surroundKeys(obj) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
  var end = arguments.length > 2 ? arguments[2] : undefined;
  end = end || start;
  return (0, _reduce.default)((0, _keys.default)(obj), function (p, v) {
    p["".concat(start).concat(v).concat(end)] = obj[v];
    return p;
  }, {});
}
