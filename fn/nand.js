"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nor;

var _not = require("./not");

var _not2 = _interopRequireDefault(_not);

var _and = require("./and");

var _and2 = _interopRequireDefault(_and);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the composition of NOT(AND(...))
function nor() {
  return (0, _not2.default)(_and2.default.apply(undefined, arguments));
}
module.exports = exports["default"];