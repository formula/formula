'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _functions = require('./functions');

var functions = _interopRequireWildcard(_functions);

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function run(exp) {
  var locals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var compiled = (0, _isfunction2.default)(exp) ? exp : (0, _compile2.default)(exp);

  var funcs = functions.default;

  // Default get for plain object.
  if (locals.get !== 'function') {
    locals.get = function (name, scope) {
      if (typeof scope !== 'undefined') return locals[scope] ? locals[scope][name] : undefined;
      return locals[name];
    };
  }

  return compiled(locals, funcs);
}
module.exports = exports['default'];