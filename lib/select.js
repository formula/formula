"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = select;

var _isarray = _interopRequireDefault(require("./isarray"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// SELECT fields from o
function select(fields, o) {
  // non-json
  if (!o || "object" != _typeof(o)) return; // check for fields

  if (!fields) return; // split

  if ("string" == typeof fields) fields = fields.split(/ *, */); // fields array

  if ((0, _isarray.default)(o)) {
    return o.map(function (obj) {
      return (0, _reduce.default)(fields, function (ret, key) {
        ret[key] = obj[key];
        return ret;
      }, {});
    });
    return;
  } // fields o


  return (0, _reduce.default)(fields, function (ret, key) {
    ret[key] = o[key];
    return ret;
  }, {});
}
