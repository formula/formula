"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nor;

var _not = require("./not");

var _not2 = _interopRequireDefault(_not);

var _or = require("./or");

var _or2 = _interopRequireDefault(_or);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nor() {
  return (0, _not2.default)(_or2.default.apply(undefined, arguments));
}
module.exports = exports["default"];