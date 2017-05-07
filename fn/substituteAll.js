'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = substituteAll;

var _substitute = require('./substitute');

var _substitute2 = _interopRequireDefault(_substitute);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// substituteAll is a lightweight "substitution tags" engine that implement a global substitute for multiple items.
//
// The key values in your locals object are replaced. Unlike other templating systems it doesn't specify characters that surround your tokens.
//
// The function does not encode HTML entities. Don't use this to generate HTML. There are plently of alternative like underscore.js that do that already.
//
// It is equivalent to:
// ```js
// locals = { '-first-': 'Joe', '-last-': 'Smith' }
// substitute( substitute("-first- -last", '-first-',  locals), '-last-', 'Smith', locals)
// ```
function substituteAll(content, locals) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : start;

  if (!locals) return content;
  return (0, _reduce2.default)((0, _keys2.default)(locals), function (p, v) {
    return (0, _substitute2.default)(p, '' + start + v + end, locals[v]);
  }, content);
} // Copyright 2015 JC Fisher
module.exports = exports['default'];