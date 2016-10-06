'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbervalue;

var _isempty = require('./isempty');

var _isempty2 = _interopRequireDefault(_isempty);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert a text value into a number value.
function numbervalue(text, decimal_separator, group_separator) {
  decimal_separator = decimal_separator || '.';
  group_separator = group_separator || ',';

  // Return `#VALUE!` when text is empty
  if ((0, _isempty2.default)(text)) {
    return _error2.default.value;
  }

  // Return the value when it is already a number.
  if ((0, _isnumber2.default)(text)) {
    return text;
  }

  var foundDecimal = false,
      len = text.length - 1;

  if (text.length === 1) {
    if (text.charCodeAt(0) < 48 || text.charCodeAt(0) > 57) {
      return _error2.default.value;
    }
    return +text;
  }

  return text.split('').reduce(function (acc, item, index) {
    if (acc === _error2.default.value) {
      return _error2.default.value;
    } else if (len === index) {
      if (item === '%') {
        return +acc / 100;
      }
      return +acc.concat(item);
    } else if (item === decimal_separator) {
      if (foundDecimal) return _error2.default.value;
      foundDecimal = true;
      return acc.concat('.');
    } else if (item === group_separator) {
      return acc;
      // check if between 0 and 9 ascii codes
    } else if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) {
      return _error2.default.value;
    }

    return acc.concat(item);
  });
};
module.exports = exports['default'];