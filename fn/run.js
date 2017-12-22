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

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// m is a cache of compiled expressions.
var m = {};

// Execute a formula expression
function run(exp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var funcs = functions.default;

  // if the exp is a function then return it immediately.
  if ((0, _isfunction2.default)(exp)) return exp;

  if (!(0, _istext2.default)(exp)) return _error2.default.na;

  // check cached and shortcut if appropriate.
  if (m.hasOwnProperty(exp)) {
    // reload the compiled function.
    compiled = m[exp];
  } else {
    // compile the expression.
    var compiled = (0, _compile2.default)(exp);

    // cache the compiled function.
    m[exp] = compiled;
  }

  var locals = (0, _assign2.default)({}, params);

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