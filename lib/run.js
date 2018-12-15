"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var funcs = _interopRequireWildcard(require("./functions"));

var _compile = _interopRequireDefault(require("./compile"));

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _assign = _interopRequireDefault(require("./assign"));

var _istext = _interopRequireDefault(require("./istext"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright 2015-2018 FormBucket LLC
// m is a cache of compiled expressions.
var m = {}; // Execute a formula expression

function run(exp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // if the exp is a function then return it immediately.
  if ((0, _isfunction.default)(exp)) return exp;
  if (!(0, _istext.default)(exp)) return _error.ERRORTYPES.na; // check cached and shortcut if appropriate.

  if (m.hasOwnProperty(exp)) {
    // reload the compiled function.
    compiled = m[exp];
  } else {
    // compile the expression.
    var compiled = (0, _compile.default)(exp); // cache the compiled function.

    m[exp] = compiled;
  }

  var locals = (0, _assign.default)({}, params); // Default get for plain object.

  if (locals.get !== "function") {
    locals.get = function (name, scope) {
      if ((0, _istext.default)(scope)) {
        return locals[scope] ? locals[scope][name] : undefined;
      }

      return locals[name];
    };
  }

  return compiled(locals, funcs);
}
