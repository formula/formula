'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AND = AND;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AND reduces list of truthy values into true or false value
function AND() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  // Reduce criteria into boolean value.
  return criteria.reduce(function (acc, item) {

    // return `#VALUE!` if not true, false, 1 or 0
    if (item !== true && item !== false && item !== 1 && item !== 0) {
      return _ERROR2.default.value;
    }

    // Once `#VALUE!` is found then always return `#VALUE!`
    if (acc === _ERROR2.default.value) return _ERROR2.default.value;

    // Once `false` is found always return `false`
    if (acc === false) return false;

    // Return the current value whether true or false
    return item === true || item === 1;
  });
} // Copyright 2015 Peter W Moresi